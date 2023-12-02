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
    
      <div className="w-72">
        {/* Column Title */}
        <div key={index} className="mb-6">{columnTitle}</div>
        {/* Tasks */}
        {<SortableContext items={tasksIds}>{tasksPreviewData}</SortableContext>}
        
      </div>

  )

  

}
