import React, { useState } from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

interface Subtask {
    id: number;
    title: string;
  }

const TaskCard: React.FC<ModalProps> = ({ show, onClose}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [subtasks, setSubtasks] = useState<Subtask[]>([]);
    const [status, setStatus] = useState('Todo');
  if (!show) {
    return null;
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic goes here
    console.log({ title, description, subtasks, status });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-dark-darkGrey w-96 p-6">
        <div className="flex flex-col gap-6">
            <div className="text-lg text-white font-jakarta font-bold">Add New Task</div>
            <div className="title text-white flex flex-col gap-2">
                <label className="text-xs">Title</label>
                <input type="text" id="fname" name="fname" className="bg-dark-darkGrey border-1 border-borderGray rounded h-10"/> 
            </div>
            <div className="description text-white flex flex-col gap-2">
                <label className="text-xs">Description</label>
                <input type="text" id="description" name="description" className="bg-dark-darkGrey border-1 border-borderGray rounded h-28"/> 
            </div>
            <div className="subtask text-white flex flex-col gap-2">
                <label className="text-xs">Subtasks</label>
                <div className="flex gap-4">
                    <input type="text" id="description1" name="description" className="bg-dark-darkGrey border-1 border-borderGray rounded h-10 w-[90%]"/> 
                    <div className="flex justify-items-center items-center w-[10%]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" className="">
                            <rect x="12.7279" width="3" height="18" transform="rotate(45 12.7279 0)" fill="#828FA3"/>
                            <rect y="2.12109" width="3" height="18" transform="rotate(-45 0 2.12109)" fill="#828FA3"/>
                        </svg>
                    </div>
                </div>
                <div className="flex gap-4">
                    <input type="text" id="description2" name="description" className="bg-dark-darkGrey border-1 border-borderGray rounded h-10 w-[90%]"/> 
                    <div className="flex justify-items-center items-center w-[10%]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" className="">
                            <rect x="12.7279" width="3" height="18" transform="rotate(45 12.7279 0)" fill="#828FA3"/>
                            <rect y="2.12109" width="3" height="18" transform="rotate(-45 0 2.12109)" fill="#828FA3"/>
                        </svg>
                    </div>
                </div>
            </div>
            <button type="button" className="bg-white text-mainPurple rounded-2xl p-2">+ Add New Subtask</button>
            <div className="status text-white flex flex-col gap-2">
                <label className="text-xs">Status</label>
                <select
                    className="w-full p-2 rounded bg-dark-darkGrey border-1 border-borderGray text-sm"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="Todo">Todo</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            <button type="submit" className="w-full bg-mainPurple text-white p-2 rounded">Create Task</button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
