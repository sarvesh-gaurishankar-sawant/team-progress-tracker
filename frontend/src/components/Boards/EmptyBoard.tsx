import { Button } from "@mui/material";

export default function EmptyBoard() {
  return (
    <div className="h-screen border-8 border-sky-500 flex flex-col justify-center content-center ">
        <p className="text-center">This board is empty. Create a new column to get started.</p>
        <Button variant="contained" className="self-center">Add new column</Button>
    </div>
  )
}
