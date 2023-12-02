import { SortableContext } from "@dnd-kit/sortable";
import { TaskType } from "../type";
import Task from "../Tasks/Task";
import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  columnTitle: string;
  tasksObjectArray: TaskType[];
  index: number;
  setTasksObjectArray: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

export default function Column({ columnTitle,  tasksObjectArray, index, setTasksObjectArray}: Props) {
  const [activeTask, setActiveTask] = useState<TaskType | null>(null);
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: index,
    data: {
      type: "Column",
      column: {
        columnTitle,
        tasksObjectArray,
        index,
        setTasksObjectArray
      },
    }
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div 
      key={index} 
      className="w-72 border border-sky-500" 
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      />
    );
  }




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
      <div className="w-72 touch-none" >
        {/* Column Title */}
        <div key={index} className="mb-6 touch-none" ref={setNodeRef} style={style} >{columnTitle}</div>
        {/* Tasks */}
        {<SortableContext items={tasksIds}>{tasksPreviewData}</SortableContext>}
      </div>
  )
}
