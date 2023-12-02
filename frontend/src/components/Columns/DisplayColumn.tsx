import { Button, CircularProgress } from "@mui/material";
import Column from "./Column";
import { Board, TaskType } from "../type";
import { useEffect, useState } from "react";
import { DndContext, DragOverEvent, DragOverlay, DragStartEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import Task from "../Tasks/Task";


type Column = {
    index: number;
    title: string;
}

interface Props {
    boardData: Board;
    createNewColumn: () => void
}

export default function DisplayColumn({ boardData, createNewColumn }: Props) {

  const [tasksObjectArray, setTasksObjectArray] = useState<TaskType[]>([]);
  const [refreshTasksData, setRefreshTasksData ] = useState(true)

  const [activeTask, setActiveTask] = useState<TaskType | null>(null);

  useEffect(() => {
    const tasksMongoIds = boardData.tasks;

    const fetchTasks = async () => {
      try {
        const tasksObjectPromiseArray = Promise.all(
          tasksMongoIds.map(tasksMongoId =>
            fetch(`http://localhost:3001/tasks/${tasksMongoId}`)
              .then(response => response.json())
          )
        );
        const taskObjectArray: TaskType[] = await tasksObjectPromiseArray;
        setTasksObjectArray(taskObjectArray);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    if(refreshTasksData){
      fetchTasks();
      setRefreshTasksData(false);
    }
    
  }, [refreshTasksData]);

  let allColumns;
  let columns;
  if(tasksObjectArray){
    columns = boardData.columns;
    allColumns = columns.map((column, index) => <Column key={index} columnTitle={column} tasksObjectArray={tasksObjectArray} setTasksObjectArray={setTasksObjectArray}index={index}/>);
  }
  

  if(allColumns){
    return (
      <DndContext onDragStart={onDragStart} onDragOver={onDragOver}>
      <div>
        <div className="flex flex-row gap-x-9	">
        <div className="flex flex-row gap-x-9">{[...allColumns, <Button key="add_new_column" className="w-72 border border-sky-500 h-screen" onClick={() => {createNewColumn()}}>Add new column</Button>]}</div>
        </div>
      </div>
      {createPortal(
          <DragOverlay>
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
  }

  function onDragOver(event: DragOverEvent) {
    console.log("On drag over")
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveATask = active.data.current?.type === "Task";
    const isOverATask = over.data.current?.type === "Task";

    if (!isActiveATask) return;

    // Dropping a Task over another Task
    if (isActiveATask && isOverATask) {
      setTasksObjectArray((tasks) => {
        const activeIndex = tasks.findIndex((t) => t._id === activeId);
        const overIndex = tasks.findIndex((t) => t._id === overId);

        if (tasks[activeIndex].status != tasks[overIndex].status) {
          tasks[activeIndex].status = tasks[overIndex].status;
          return arrayMove(tasks, activeIndex, overIndex - 1);
        }

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }
  }
 
}
