import { Modal } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface Subtask {
    id: number;
    name: string;
    completed: boolean;
   }
   
   interface Task {
    id: number;
    name: string;
    description: string;
    subtasks: Subtask[];
    status: string;
   }

const initialTasks: Task = 
 {
    id: 1,
    name: 'Build Ul for onboarding flow',
    description: 'Subtasks',
    subtasks: [
        { id: 1, name: 'Create Task', completed: false },
        { id: 2, name: 'Add New Subtask', completed: false }
    ],
    status: 'Todo',
 };

const TaskEdit: React.FC = () => {
 const [task, setTasks] = useState(initialTasks);
 const [open, setOpen] = useState(true);
//  const handleAddNewSubtask = (taskId: number, subtaskName: string) => {
//     setTasks(
//       tasks.map((task) => {
//         if (task.id === taskId) {
//           return {
//             ...task,
//             subtasks: [...task.subtasks, subtaskName],
//           };
//         }
//         return task;
//       })
//     );
//  };

    const handleAddNewSubtask = (taskId: number, subtaskName: string) => {
        console.log('add new subtask');
    };

    const handleClose = () => {
        setOpen(false);
    };

return (
    <Modal open={open} onClose={handleClose} className="flex items-center justify-center">
            <div className="container mx-auto w-[480px] h-auto bg-[#2b2c36] p-8">
        <h1 className="text-4xl font-bold mb-4 text-white">Edit Task</h1>
        <form>
        <div className="mb-4">
            <label htmlFor="taskName" className="block mb-2 text-white">
            Task Name
            </label>
            <input
            type="text"
            id="taskName"
            name="taskName"
            value={task.name}
            className="w-full border border-gray-300 p-2 rounded"
            />
        </div>
        <div className="mb-4">
            <label htmlFor="taskDescription" className="block mb-2 text-white">
            Description
            </label>
            <textarea
            id="taskDescription"
            name="taskDescription"
            value={task.description}
            className="w-full border border-gray-300 p-2 rounded"
            />
        </div>
        <h2 className="mb-4 text-white">Subtasks</h2>
        {task.subtasks.map((subtask) => (
            <div key={subtask.id} className="mb-4">
            <input
                type="checkbox"
                id={`subtask-${subtask.id}`}
                name={`subtask-${subtask.id}`}
                checked={subtask.completed}
                className="mr-2"
            />
            <label htmlFor={`subtask-${subtask.id}`}>{subtask.name}</label>
            <CloseIcon className='fill-[#848fa1]'/>
            </div>
        ))}
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Save Changes
        </button>
        </form>
    </div>
    </Modal>

    );
};

export default TaskEdit;