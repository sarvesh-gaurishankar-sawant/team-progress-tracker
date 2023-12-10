import { useEffect, useState } from "react"
import DisplayColumn from "../Columns/DisplayColumn";
import { CircularProgress } from "@mui/material";
import { getBoardAsync } from "../../store/active/activeBoardSlice"
import { setSideBarFlag } from "../../store/flags/sideBarFlagSlice"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store"
import { useParams } from "react-router-dom";
import { BoardType } from "../type";

type Column = {
  index: number;
  title: string;
}

type Task = {
  index: number;
  title: string;
  columnName: string;
}

interface Props {
  isSidebarOpen: Boolean
}

export default function Board() {

  const params = useParams()

  //State to get all the boards
  const [boards, setBoards] = useState([]);
  const [refreshBoardsData, setRefereshBoardsData ] = useState(true)
  const [columns, setColumns] = useState<Column[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  let boardData: BoardType | null = useSelector((state: RootState) => state.activeBoard.value);
  let isSidebarOpen: boolean = useSelector((state: RootState) => state.sideBarFlag.value);
  
  const dispatch = useDispatch<AppDispatch>();

  let paramsId: string = params?.id || ""
  useEffect(() => {
    const fetchTasks = async () => {
      dispatch(getBoardAsync(paramsId));
    };
    fetchTasks(); 
  }, [params.id]);
  
  if(boardData !== null){

  return (
    <div className="overflow-x-auto h-screen">   
        <div className={!isSidebarOpen ? 'mt-28 ml-12 sm:ml-96' : 'mt-28 ml-72 sm:ml-96'}><DisplayColumn/></div>
    </div>  
  ) 
  }
  else {
    return (
      <div className="flex h-screen"><CircularProgress className="mx-auto self-center"/></div>
    )
  }
}
