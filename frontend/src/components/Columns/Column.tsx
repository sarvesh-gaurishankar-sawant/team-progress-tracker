
type Column = {
  index: number;
  title: string;
}

interface Props {
  column: Column;
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

  //Convert the data for task preview
  const tasksPreviewData = tasks.map(task => {
    return ({
      _id: task._id,
      title: task.title,
      subtaskCount: task.subtask.length
    })
  })

  //Display task previews on column
  const tasksPreviewDataSJSX = tasksPreviewData.map(taskPreviewData => {
    return(
      <div key={taskPreviewData._id} className="w-72 mb-6 bg-[#2B2C37] h-24	rounded py-7 px-5 font-bold" >
        {taskPreviewData.title}
      </div>
    )
  })

  return (
    <div className="w-72">
      {/* Column Title */}
      <div key={column.index} className="mb-6">{column.title}</div>
      {/* Tasks */}
      {tasksPreviewDataSJSX}
    </div>
  )
}
