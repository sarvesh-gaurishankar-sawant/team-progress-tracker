import { useState } from "react"
import EmptyBoard from "./EmptyBoard"
import DisplayColumn from "../Columns/DisplayColumn";
import { Button } from "@mui/material";

type Column = {
  index: number;
  title: string;
}

type Task = {
  index: number;
  title: string;
  columnName: string;
}

export default function Board() {

  const [columns, setColumns] = useState<Column[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div className="overflow-x-auto h-screen">   
        <Button key="add_new_column" className="w-72 border border-sky-500" onClick={() => {createNewTask()}}>Add new tasks</Button>
        {columns.length === 0 && <EmptyBoard createNewColumn={createNewColumn} />}
        {columns.length !== 0 && <DisplayColumn columns={columns} createNewColumn={createNewColumn}/>}
    </div>  
  )

  function createNewColumn(){
    const columnIndex: number = columns.length;
    const newColumn: Column = {
      index: columnIndex,
      title: `Column Title ${columnIndex}`
    }
    setColumns([...columns, newColumn]);
  }

  function createNewTask() {
    const taskIndex: number = tasks.length;
    const newTask: Task = {
      index: taskIndex,
      title: `Task Title ${taskIndex}`,
      columnName: columns[0]?.title
    }
    setTasks([...tasks, newTask]);
    console.log(tasks)
  }

  
}
