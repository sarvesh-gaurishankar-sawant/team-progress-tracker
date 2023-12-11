import HomeScreen from "./components/pages/HomeScreen";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "./components/Boards/Board";
import { setUserSlice } from "./store/user/userSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import { useState } from "react";

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  dispatch(setUserSlice("656b811ba83badbd99125a44"))
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/board" element={<HomeScreen />}>
          <Route path=":id" element={<Board />} />
          </Route>
          <Route path="/login" element={<Login isOpen={false} onClose={() => {
            closeLogin();
          }} />} />
       
        </Routes>
      </BrowserRouter>
    </div>
  )
}
