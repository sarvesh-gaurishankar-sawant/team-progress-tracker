import React from "react";
import HomeScreen from "./components/pages/HomeScreen";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveAppBar from "./components/navbar/HomeNavbar";

export default function App() {
  return (
    <div>
      <ResponsiveAppBar />
    </div>
  )
}

