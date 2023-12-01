import { Button } from "@mui/material";
import Column from "./Column";

type Column = {
    index: number;
    title: string;
}

interface Props {
    columns: Column[]; 
    createNewColumn: () => void
}

export default function DisplayColumn({ columns, createNewColumn }: Props) {

  const allColumns = columns.map(column => <Column key={column.index} column={column}/>);
  return (
    <div className="flex flex-row gap-x-9	">
        <div className="flex flex-row gap-x-9">{[...allColumns, <Button key="add_new_column" className="w-72 border border-sky-500" onClick={() => {createNewColumn()}}>Add new column</Button>]}</div>
    </div>
    
  )
}
