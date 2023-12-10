import HomeScreen from "./components/pages/HomeScreen";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "./components/Boards/Board";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/board" element={<HomeScreen />}>
            <Route path=":id" element={<Board />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

// import { useState } from "react";
// import TaskCard from "./components/TaskCard";
// import Notification from "./components/Notification";

// const App: React.FC = () => {
//   const taskId = "6569ebee95a139a036ae352e"; // Replace with the actual value for your parameter
//   const boardId = "656c2fd50fd3446bad8bbacb"; // Replace with the actual value for your parameter

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [notificationMessage, setNotificationMessage] = useState<string>('');

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const handleTaskCreationSuccess = () => {
//     closeModal();
//     setNotificationMessage('Task successfully created!');
//   };

//   return (
//     <div className="p-4">
//     <button className="btn" onClick={openModal}>Show Modal</button>
//     {isModalOpen && <TaskCard taskId={taskId} boardId={boardId} isOpen={isModalOpen} onClose={() => {
//             closeModal();
//             handleTaskCreationSuccess();
//           }}/>}
//     {notificationMessage && (
//         <Notification message={notificationMessage} onClose={() => setNotificationMessage('')} />
//       )}
//   </div>
//   );
// };

// export default App;
