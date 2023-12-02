import { SortableContext } from "@dnd-kit/sortable";
import { DndContext, DragOverlay, DragStartEvent } from "@dnd-kit/core";
import { TaskType } from "../type";
import Task from "../Tasks/Task";
import { useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  columnTitle: string;
  tasksObjectArray: TaskType[];
  index: number;
}

export default function Column({ columnTitle,  tasksObjectArray, index}: Props) {

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
    <DndContext onDragStart={onDragStart}>
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

}
