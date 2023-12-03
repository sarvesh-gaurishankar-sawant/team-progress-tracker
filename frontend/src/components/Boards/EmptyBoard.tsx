import { Button } from "@mui/material";
interface Props {
  createNewColumn: () => void;
}

export default function EmptyBoard({ createNewColumn }:Props) {
  return (
    <div className="h-screen flex flex-col justify-center content-center">
        <p className="text-center mb-4">This board is empty. Create a new column to get started.</p>
        
        <Button variant="contained" className="self-center" onClick={() => {createNewColumn()}}>Add new column</Button>
    </div>
  )
}
