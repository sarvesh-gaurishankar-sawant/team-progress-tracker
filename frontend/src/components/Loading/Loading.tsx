import { CircularProgress } from "@mui/material"

function Loading() {
  return (
    <div className="flex h-screen"><CircularProgress className="mx-auto self-center"/></div>
  )
}

export default Loading