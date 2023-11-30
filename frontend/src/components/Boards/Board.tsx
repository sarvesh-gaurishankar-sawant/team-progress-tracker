import { useState } from "react"
import EmptyBoard from "./EmptyBoard"

export default function Board() {

  const [columns, setColumns] = useState([]);

  return (
    <div>   
        {columns.length === 0 && <EmptyBoard />}
    </div>  
  )
}
