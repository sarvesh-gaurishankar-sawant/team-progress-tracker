import { Button } from "@mui/material";

type Column = {
    index: number;
    title: string;
}

interface Props {
    columns: Column[]; 
    createNewColumn: () => void
}

export default function DisplayColumn({ columns, createNewColumn }: Props) {

  return (
    <div>
        <div>{columns.map(column => <div key={column.index}>{column.title}</div>)}</div>
        <Button variant="contained" className="self-center" onClick={() => {createNewColumn()}}>Add new column</Button>
    </div>
    
  )
}
