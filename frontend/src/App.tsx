import HomeScreen from "./components/pages/HomeScreen";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "./components/Boards/Board";
import PageNotFound from './components/pages/PageNotFound';
import { useState } from "react";

import SignUp from "./components/Auth/SignUp";
import SignUpTemp from "./components/Auth/SignUpTemp";
import AuthLayout from "./components/Auth/AuthLayout";
import Login from "./components/Auth/LoginPage";
import LoginPage from "./components/Auth/LoginPage";

// export default function App() {
// import Login from "./components/Auth/Login";
// import SignUp from "./components/Auth/SignUp";
// import { useState } from "react";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
  
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<LoginPage />} />
            <Route path="signup" element={<SignUpTemp />} />
          </Route>
          {/* <Route path="/signup" element={<SignUpTemp />} /> */}
          <Route path="/board" element={<HomeScreen />}>
          <Route path=":id" element={<Board />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}


