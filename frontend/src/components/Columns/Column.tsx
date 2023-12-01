
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
  }]

  return (
    <div className="w-72 border border-sky-500">
      {/* Column Title */}
      <div key={column.index}>{column.title}</div>
      {/* Tasks */}
      <div>content</div>
    </div>
  )
}
