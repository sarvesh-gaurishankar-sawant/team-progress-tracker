import { Button } from "@mui/material";
import { useState } from "react"

export default function Board() {

  const [columns, setColumns] = useState([]);

  return (
    <div>   
        <div>
            <p>This board is empty. Create a new column to get started.</p>
            <Button variant="contained">Add new column</Button>
        </div>
    </div>  
  )
}
