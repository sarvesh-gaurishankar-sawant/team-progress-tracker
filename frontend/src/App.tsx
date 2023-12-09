import React from "react";
import HomeScreen from "./components/pages/HomeScreen";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navigation from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/sidebar";

export default function App() {
  return (
    <div>
      <HomeScreen />
    </div>
  )
}

