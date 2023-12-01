import { useState } from "react"
import EmptyBoard from "./EmptyBoard"
import DisplayColumn from "../Columns/DisplayColumn";
import { Button } from "@mui/material";

import { createServer } from "miragejs"



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

  //Test Board Data
  const boards = [{
    name: "Sample Name 1",
    columns: ["Column1", "Column2", "Column3"],
    tasks: [
        "615cf2a6dbf66b029028a7e1",
        "615cf2b0dbf66b029028a7e2",
        "615cf2b9dbf66b029028a7e3"
    ]
  }]

  //Test Task Data
  const exampleTaskData = [
    {
        _id:"615cf2a6dbf66b029028a7e1",
        index: 1,
        title: "Task 1",
        description: "Description for Task 1",
        status: "In Progress",
    },
    {
        _id:"615cf2b0dbf66b029028a7e2",
        index: 2,
        title: "Task 2",
        description: "Description for Task 2",
        status: "In Progress",
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
