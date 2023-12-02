import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { DndContext, DragOverEvent, DragOverlay, DragStartEvent } from "@dnd-kit/core";
import { TaskType } from "../type";
import Task from "../Tasks/Task";
import { useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  columnTitle: string;
  tasksObjectArray: TaskType[];
  index: number;
  setTasksObjectArray: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

export default function Column({ columnTitle,  tasksObjectArray, index, setTasksObjectArray}: Props) {

  const [activeTask, setActiveTask] = useState<TaskType | null>(null);

  //Filter task object
  const filterTasksData = tasksObjectArray.filter(task => task.status === columnTitle)

  //Display task previews on column
  const tasksPreviewData = filterTasksData.map(taskPreviewData => {
    return(
      <Task key={taskPreviewData._id} task={taskPreviewData}/>
    )
  })

  //Get all ids
  const tasksIds = filterTasksData.map(task => task._id)

  return (
    <DndContext onDragStart={onDragStart} onDragOver={onDragOver}>
      <div className="w-72">
        {/* Column Title */}
        <div key={index} className="mb-6">{columnTitle}</div>
        {/* Tasks */}
        {<SortableContext items={tasksIds}>{tasksPreviewData}</SortableContext>}
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
      </div>
    </DndContext>
  )

  function onDragStart(event: DragStartEvent) {
    if (event.active.data.current?.type === "Task") {
      setActiveTask(event.active.data.current.task);
      console.log(activeTask)
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
