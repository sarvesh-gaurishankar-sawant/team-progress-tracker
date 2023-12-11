

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TaskType } from "../type";

interface Props {
  task: TaskType;
}

export default function Task({ task }: Props) {
  //Hook for DND
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task._id,
    data: {
      type: "Task",
      task,
    }
  });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  //Component to be shown if the task is dragging
  if (isDragging) {
    return (
      <div 
      key={task._id} 
      className="w-72 mb-6 bg-[#2B2C37] h-24	rounded py-7 px-5 font-bold hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab touch-none" 
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
    </div>
    );
  }
  //Actual task component
  return (
    <div 
      key={task._id} 
      className="w-72 mb-6 bg-[#2B2C37] h-24	rounded py-7 px-5 font-bold  hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab touch-none text-lg"  
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
        {task.title}
    </div>
  )
}
