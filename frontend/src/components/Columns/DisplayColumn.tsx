import { Button, CircularProgress } from "@mui/material";
import Column from "./Column";
import { Board, TaskType } from "../type";
import { useEffect, useState } from "react";
import { DndContext, DragEndEvent, DragOverEvent, DragOverlay, DragStartEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import Task from "../Tasks/Task";
import { ColumnType } from "../type";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store"
import {getTaskFromBoardAsync, swapTwoTasksIndex, addTaskToColumn, updateTaskFromBoardAsync} from "../../store/task/taskSlice"
interface Props {
    boardData: Board;
    createNewColumn: () => void
}
export default function DisplayColumn({ boardData, createNewColumn }: Props) {
  let tasksObjectArray: TaskType[] = useSelector((state: RootState) => state.tasksObjectArray.value);
  const dispatch = useDispatch<AppDispatch>();
  const [refreshTasksData, setRefreshTasksData ] = useState(true)
  const [activeColumn, setActiveColumn] = useState<ColumnType | null>(null);
  const [activeTask, setActiveTask] = useState<TaskType | null>(null);
  
  //Drag will trigger only after 10px drag
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );
  //Get all the tasks for a board
  useEffect(() => {
    const tasksMongoIds = boardData.tasks;
    const fetchTasks = async () => {
      dispatch(getTaskFromBoardAsync(boardData));
    };
    if(refreshTasksData){
      fetchTasks();
      setRefreshTasksData(false);
    }
  }, [refreshTasksData]);

  //Update the task, in database after it is placed in different location on kanban board
  useEffect(() => {
    const tasksMongoIds = boardData.tasks;
    const fetchTasks = async () => {
     dispatch(updateTaskFromBoardAsync({
      boardData,
      tasksObjectArray
     }));
    }
    fetchTasks();
  }, [tasksObjectArray]);
  
  let allColumns;
  let columns;

  if(tasksObjectArray){
    columns = boardData.columns;
    allColumns = columns.map((column, index) => <Column key={index} columnTitle={column} tasksObjectArray={tasksObjectArray} index={index}/>);
  }
  

  if(allColumns){
    return (
      <DndContext onDragStart={onDragStart} onDragOver={onDragOver} onDragEnd={onDragEnd} sensors={sensors}>
      <div>
        <div className="flex flex-row gap-x-9	">
        <div className="flex flex-row gap-x-9">{[...allColumns, <Button key="add_new_column" className="w-72 border border-sky-500 h-screen" onClick={() => {createNewColumn()}}>Add new column</Button>]}</div>
        </div>
      </div>
      {createPortal(
          <DragOverlay>
            {activeColumn && (
              <Column columnTitle={activeColumn.columnTitle} tasksObjectArray={activeColumn.tasksObjectArray} index={activeColumn.index}/>
            )}
            {activeTask && (
              <Task
                task={activeTask}
              />
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    )
  }
  else {
    return (
      <div className="flex h-screen"><CircularProgress className="mx-auto self-center"/></div>
    )
  }
  function onDragStart(event: DragStartEvent) {

    if (event.active.data.current?.type === "Task") {
      setActiveTask(event.active.data.current.task);
      return;
    }

    if (event.active.data.current?.type === "Column") {
      setActiveColumn(event.active.data.current.column);
      return;
    }
  }
  function onDragOver(event: DragOverEvent) {

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveATask = active.data.current?.type === "Task";
    const isOverATask = over.data.current?.type === "Task";

    if (!isActiveATask) return;

    if (isActiveATask && isOverATask) {
      dispatch(swapTwoTasksIndex({
        activeId,
        overId,
      }))
    }
    const isOverAColumn = over.data.current?.type === "Column"; 
    if (isActiveATask && isOverAColumn) {
      dispatch(addTaskToColumn({
        activeId,
        overId,
        boardData
      }));
    }
  }
  function onDragEnd(event: DragEndEvent) {
    setActiveColumn(null);
    setActiveTask(null);
  }
}
