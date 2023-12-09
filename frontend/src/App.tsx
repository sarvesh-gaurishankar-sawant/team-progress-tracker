import React from "react";
import HomeScreen from "./components/pages/HomeScreen";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navigation from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/board" element={<HomeScreen />}>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

