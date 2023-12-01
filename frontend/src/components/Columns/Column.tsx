import { SortableContext } from "@dnd-kit/sortable";
import Task from "../Tasks/Task";
import { DndContext } from "@dnd-kit/core";

type Column = {
  index: number;
  title: string;
}

interface Props {
  column: Column;
}

type Task = {
  _id: string; // Assuming _id is of type string
  title: string;
  subtaskCount: number;
}

export default function Column({ column }: Props) {
  //Fetch tasks from column and make an array from it - To be implemented
  const tasks = [{
      _id:"615cf2a6dbf66b029028a7e1",
      index: 1,
      title: "Task 1",
      description: "Description for Task 1",
      status: "Todo",
      subtask: ["615cf2b9dbf66b029028a7e5", "615cf2b9dbf66b029028a7e6"]
  },
  {
      _id:"615cf2b0dbf66b029028a7e2",
      index: 2,
      title: "Task 2",
      description: "Description for Task 2",
      status: "Doing",
      subtask: ["615cf2b9dbf66b029028a7e7"]
  },
  {
      _id:"615cf2b9dbf66b029028a7e3",
      index: 3,
      title: "Task 3",
      description: "Description for Task 3",
      status: "Pending",
      subtask: []
  }]

  const tasks_id = ["615cf2a6dbf66b029028a7e1", "615cf2b0dbf66b029028a7e2", "615cf2b9dbf66b029028a7e3"]

  //Convert the data for task preview
  const tasksPreviewData: Task[] = tasks.map(task => {
    return ({
      _id: task._id,
      title: task.title,
      subtaskCount: task.subtask.length
    })
  })

  //Display task previews on column
  const tasksPreviewDataSJSX = tasksPreviewData.map(taskPreviewData => {
    return(
      <Task key={taskPreviewData._id} task={taskPreviewData}/>
    )
  })

  return (
    <DndContext>
      <div className="w-72">
        {/* Column Title */}
        <div key={column.index} className="mb-6">{column.title}</div>
        {/* Tasks */}
        {<SortableContext items={tasks_id}>{tasksPreviewDataSJSX}</SortableContext>}
      </div>
    </DndContext>
  )
}
