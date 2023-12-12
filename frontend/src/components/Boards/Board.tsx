import { useEffect } from "react"
import DisplayColumn from "../Columns/DisplayColumn";
import { CircularProgress } from "@mui/material";
import { getBoardAsync } from "../../store/active/activeBoardSlice"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store"
import { Navigate, useParams } from "react-router-dom";
import { BoardType } from "../type";


export default function Board() {
  const params = useParams()
  
  let boardData: BoardType | null = useSelector((state: RootState) => state.activeBoard.value);
  let isSidebarOpen: boolean = useSelector((state: RootState) => state.sideBarFlag.value);
  let reloadBoard: boolean = useSelector((state: RootState) => state.reloadBoard.value);
  let reloadTaskSliceFlag: boolean = useSelector((state: RootState) => state.reloadTask.value);
 
  
  const dispatch = useDispatch<AppDispatch>();

  let paramsId: string = params?.id || ""
  useEffect(() => {
    console.log("Inside Board")
    const fetchTasks = async () => {
      await dispatch(getBoardAsync(paramsId));
    };
    fetchTasks(); 
  }, [paramsId, dispatch, reloadBoard, reloadTaskSliceFlag]);

  let isLoggedIn: boolean = useSelector((state: RootState) => state.login.value);

  if(!isLoggedIn){
    return (
      <Navigate to="/" />
    )
  }

  
  
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
