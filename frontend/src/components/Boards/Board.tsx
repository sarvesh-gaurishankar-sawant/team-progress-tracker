import { useState } from "react"
import EmptyBoard from "./EmptyBoard"

type Column = {
  index: number;
  title: string;
}

export default function Board() {

  const [columns, setColumns] = useState<Column[]>([]);

  return (
    <div>   
        {columns.length === 0 && <EmptyBoard createNewColumn={createNewColumn} />}
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
}
