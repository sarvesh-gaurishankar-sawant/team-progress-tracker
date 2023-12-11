import HomeScreen from "./components/pages/HomeScreen";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "./components/Boards/Board";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { setUserSlice } from "./store/user/userSlice";
import Login from "./components/Auth/Login";

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  dispatch(setUserSlice("656b811ba83badbd99125a44"))

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/board" element={<HomeScreen />}>
            <Route path=":id" element={<Board />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
  
}
