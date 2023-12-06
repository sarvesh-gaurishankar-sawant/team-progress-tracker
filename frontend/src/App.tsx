import { useState } from "react";
import TaskViewModal from "./components/modals/task-view-modal";

export default function App() {
  // need to get rid of hard coded values
  const taskId = "6569ebee95a139a036ae352e"; // Replace with the actual value for your parameter
  const boardId = "656c2fd50fd3446bad8bbacb"; // Replace with the actual value for your parameter

  const [show, setShow] = useState(false);

  const handleButtonClick = () => {
    setShow(true);
  }

  const handleClose = () => {
    setShow(false);
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Show Modal</button>
      {show && <TaskViewModal taskId={taskId} boardId={boardId} setShowFalse={handleClose}/>}
    </div>
  );
}