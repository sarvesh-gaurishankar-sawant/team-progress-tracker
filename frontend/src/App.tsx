// import { useEffect, useState } from "react";
// import TaskViewModal from "./components/modals/task-view-modal";
// import TaskEditModal from "./components/modals/task-edit";
// import { set } from "mongoose";
// import { ITask } from "./model interfaces/ITask";
// import { ISubtask } from "./model interfaces/ISubtask";
// import { Modal } from "@mui/material";
// // import CssBaseline from '@material-ui/core/CssBaseline';


// export default function App() {
//   // need to get rid of hard coded values
//   const taskId = "6576c547d70e2cb3ae4b0296"; // Replace with the actual value for your parameter
//   const boardId = "65763c694da65471d9586d16"; // Replace with the actual value for your parameter

//   const [task, setTask] = useState<ITask>();
//   const [subtasks, setSubtasks] = useState<ISubtask[]>([]);
//   const [columns, setColumns] = useState([]);
//   const [showViewModal, setShowViewModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const taskResonse = await fetch(`http://localhost:3001/tasks/${taskId}`); // Replace with your API endpoint
//         var taskJson = await taskResonse.json();
//         setTask(taskJson);

//         const subtasksResponse = await fetch(`http://localhost:3001/subtasks/getSubtasksByTask/${taskId}`);
//         var subtasksJson = await subtasksResponse.json();
//         setSubtasks(subtasksJson);

//         const boardResponse = await fetch(`http://localhost:3001/boards/${taskJson.board}`);
//         var boardJson = await boardResponse.json();
//         setColumns(boardJson.columns);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const openEditModal = () => {
//     setShowEditModal(true);
//     setShowViewModal(false);
//   }

//   const closeEditModal = () => {
//     setShowEditModal(false);
//     setShowViewModal(true);
//   }

//   const saveChanges = async (updatedTask: ITask, updatedSubtasks: ISubtask[]) => {
//     setSubtasks(updatedSubtasks);
//     setTask(updatedTask);
//     try{
//       const response = await fetch(`http://localhost:3001/tasks/${updatedTask._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(updatedTask)
//       });
//       console.log(response);
//     }
//     catch (error) {
//       console.error('Error fetching data:', error);
//     }
//     try{
//       updatedSubtasks.forEach(async (subtask) => {
//         const response = await fetch(`http://localhost:3001/subtasks/${subtask._id}`, {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(subtask)
//         });
//         console.log(response);
//       });
//     }
//     catch (error) {
//       console.error('Error fetching data:', error);
//     }
//     closeEditModal();
//   }

//   const handleDeleteTask = () => {
//     setShowEditModal(false);
//     setShowViewModal(false);
//     return (
//         <Modal open={true}>
//           <h3>Task deleted successfully.</h3>
//         </Modal>

//     );
//   }

//   return (
//     <div>
//       <button className="border-1 border-solid border-black" onClick={() => setShowViewModal(true)}>Show Modal</button>
//       {showViewModal && task && (<TaskViewModal initialTask={task} initialSubtasks={subtasks} initialColumns={columns} onEdit={openEditModal}/>)}
//       {showEditModal && task && (<TaskEditModal initialTask={task} initialSubtasks={subtasks} initialColumns={columns} onSave={saveChanges} onClose={closeEditModal}/>)}
//     </div>
//   );
// }