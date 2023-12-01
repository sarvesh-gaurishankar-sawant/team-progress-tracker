import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import React from 'react'

type Task = {
  _id: string; // Assuming _id is of type string
  title: string;
  subtaskCount: number;
}

interface Props {
  task: Task;
}

export default function Task({ task }: Props) {

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


//Test Task Data
const exampleTaskData = [
    {
        _id:"615cf2a6dbf66b029028a7e1",
        index: 1,
        title: "Task 1",
        description: "Description for Task 1",
        status: "Todo",
    },
    {
        _id:"615cf2b0dbf66b029028a7e2",
        index: 2,
        title: "Task 2",
        description: "Description for Task 2",
        status: "Doing",
    },
    {
        _id:"615cf2b9dbf66b029028a7e3",
        title: "Task 3",
        description: "Description for Task 3",
        status: "Pending",
    },
    {
      _id:"615cf2b9dbf66b029028a7e4",
      title: "Task 3",
      description: "Description for Task 3",
      status: "Pending",
    }
  ];

  return (
    <div key={task._id} className="w-72 mb-6 bg-[#2B2C37] h-24	rounded py-7 px-5 font-bold cursor-pointer" >
        {task.title}
    </div>
  )
}
