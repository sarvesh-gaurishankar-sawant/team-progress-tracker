import { SortableContext } from "@dnd-kit/sortable";
import { TaskType } from "../type";
import Task from "../Tasks/Task";
import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface Props {
  columnTitle: string;
  index: number;
}

export default function Column({ columnTitle, index}: Props) {
  let tasksObjectArray: TaskType[] = useSelector((state: RootState) => state.tasksObjectArray.value);
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




  if(tasksObjectArray.length > 0){//Filter task object
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
  )}
  else {
    return (
      <div className="w-72 touch-none" >
        {/* Column Title */}
        <div key={index} className="mb-6 touch-none" ref={setNodeRef} style={style} >{columnTitle}</div>
      </div>
  )
  }
}
