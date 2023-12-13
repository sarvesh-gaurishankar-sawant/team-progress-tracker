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
import SignUp from "./components/Auth/SignUp";
import PageNotFound from './components/pages/PageNotFound';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/board" element={<HomeScreen />}>
            <Route path=":id" element={<Board />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}


