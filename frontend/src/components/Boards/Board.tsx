import { useEffect, useState } from "react"
import EmptyBoard from "./EmptyBoard"
import DisplayColumn from "../Columns/DisplayColumn";
import { Button, CircularProgress } from "@mui/material";

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

  //  //Test Board Data
  //  const boards = [{
  //   name: "Sample Board 1",
  //   columns: ["Column1", "Column2", "Column3"],
  //   tasks: [
  //       "615cf2a6dbf66b029028a7e1",
  //       "615cf2b0dbf66b029028a7e2",
  //       "615cf2b9dbf66b029028a7e3"
  //   ]
  // },
  // {
  //   name: "Sample Board 2",
  //   columns: ["Column1", "Column2", "Column3"],
  //   tasks: [
  //       "615cf2a6dbf66b029028a7e1",
  //       "615cf2b0dbf66b029028a7e2",
  //       "615cf2b9dbf66b029028a7e3"
  //   ]
  // }
  // ]
  

  //State to get all the boards
  const [boards, setBoards] = useState([]);
  const [refreshBoardsData, setRefereshBoardsData ] = useState(true)
  const [columns, setColumns] = useState<Column[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  
  //Get all the boards for the user
  const allBoards = useEffect(() => {
    if (setRefereshBoardsData) {
      fetch('http://localhost:3001/boards/?userId=656aa538b391863d91b13869')
        .then(response => response.json())
        .then(boards => {
          setBoards(boards)
          setRefereshBoardsData(false)
        })
    }
  }, [refreshBoardsData])
  
  // return (
  //   <div className="overflow-x-auto h-screen">   
  //       <Button key="add_new_column" className="w-72 border border-sky-500" onClick={() => {createNewTask()}}>Add new tasks</Button>
  //       {columns.length === 0 && <EmptyBoard createNewColumn={createNewColumn} />}
  //       {columns.length !== 0 && <DisplayColumn columns={columns} createNewColumn={createNewColumn}/>}
  //   </div>  
  // )

  // function createNewColumn(){
  //   const columnIndex: number = columns.length;
  //   const newColumn: Column = {
  //     index: columnIndex,
  //     title: `Column Title ${columnIndex}`
  //   }
  //   setColumns([...columns, newColumn]);
  // }

  // function createNewTask() {
  //   const taskIndex: number = tasks.length;
  //   const newTask: Task = {
  //     index: taskIndex,
  //     title: `Task Title ${taskIndex}`,
  //     columnName: columns[0]?.title
  //   }
  //   setTasks([...tasks, newTask]);
  //   console.log(tasks)
  // }

  //TODO-Sarvesh: This is temprory need to remove this and use Shashwat nav bar to send data here
  let boardData;
  if(boards.length != 0){
    boardData = boards[0];
    console.log(boardData)
  return (
    <div className="overflow-x-auto h-screen">   
        <Button key="add_new_column" className="w-72 border border-sky-500" onClick={() => {createNewTask()}}>Add new tasks</Button>
        {columns.length === 0 && <EmptyBoard createNewColumn={createNewColumn} />}
        {columns.length !== 0 && <DisplayColumn boardData={boardData} createNewColumn={createNewColumn}/>}
    </div>  
  ) 
  }
  else {
    return (
      <div className="flex h-screen"><CircularProgress className="mx-auto self-center"/></div>
    )
  }

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
