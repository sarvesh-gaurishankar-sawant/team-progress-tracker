import { Button, CircularProgress } from "@mui/material";
import Column from "./Column";
import { Board, TaskType } from "../type";
import { useEffect, useState } from "react";


type Column = {
    index: number;
    title: string;
}

interface Props {
    boardData: Board;
    createNewColumn: () => void
}

export default function DisplayColumn({ boardData, createNewColumn }: Props) {

  const [tasksObjectArray, setTasksObjectArray] = useState<TaskType[]>([]);
  const [refreshTasksData, setRefreshTasksData ] = useState(true)

  useEffect(() => {
    const tasksMongoIds = boardData.tasks;

    const fetchTasks = async () => {
      try {
        const tasksObjectPromiseArray = Promise.all(
          tasksMongoIds.map(tasksMongoId =>
            fetch(`http://localhost:3001/tasks/${tasksMongoId}`)
              .then(response => response.json())
          )
        );
        const taskObjectArray: TaskType[] = await tasksObjectPromiseArray;
        setTasksObjectArray(taskObjectArray);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    if(refreshTasksData){
      fetchTasks();
      setRefreshTasksData(false);
    }
    
  }, [refreshTasksData]);

  let allColumns;
  let columns;
  if(tasksObjectArray){
    columns = boardData.columns;
    allColumns = columns.map((column, index) => <Column key={index} columnTitle={column} tasksObjectArray={tasksObjectArray} setTasksObjectArray={setTasksObjectArray}index={index}/>);
  }
  

  if(allColumns){
    return (
      <>
        <div className="flex flex-row gap-x-9	">
        <div className="flex flex-row gap-x-9">{[...allColumns, <Button key="add_new_column" className="w-72 border border-sky-500 h-screen" onClick={() => {createNewColumn()}}>Add new column</Button>]}</div>
        </div>
      </>
    )
  }
  else {
    return (
      <div className="flex h-screen"><CircularProgress className="mx-auto self-center"/></div>
    )
  }
 
}
