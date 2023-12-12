import React, { useState } from 'react';
import { Modal, TextField, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { BoardType, TaskType } from '../type';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getBoardAsync } from '../../store/active/activeBoardSlice';
import { createNewTaskAsync } from '../../store/task/singleTaskSlice';
import { reloadTask } from '../../store/flags/reloadTasksSlice';


interface Task {
  title: string;
  description: string;
  status: string;
  subtasks: string[];

}

interface TaskCardProps {
  isOpen: boolean;
  onTaskCreate: () => void;
  onClose: () => void;
}


const TaskCard: React.FC<TaskCardProps> = ({isOpen, onTaskCreate, onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const emptyBoard: BoardType= {
    columns: [],
    name: "",
    tasks: [],
    _id: ""
  }
  let reloadTaskSliceFlag: boolean = useSelector((state: RootState) => state.reloadTask.value);
  
  let boardData: BoardType = useSelector((state: RootState) => state.activeBoard.value) || emptyBoard;
  let boardId = boardData._id;
  let index = boardData.tasks.length + 1
  let columns = boardData.columns;

  const [task, setTask] = useState<Task>({
    title: '',
    description: '',
    status: '',
    subtasks: [],
  });
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleStatusChange = (event: SelectChangeEvent) => {
    setTask((prevTask) => ({
      ...prevTask,
      status: event.target.value,
    }));
  };

  const handleSubtaskChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSubtasks = [...task.subtasks];
    newSubtasks[index] = event.target.value;
    setTask({ ...task, subtasks: newSubtasks });
  };
  
  const handleAddSubtask = () => {
    setTask({ ...task, subtasks: [...task.subtasks, ''] });
  };
  
  const handleRemoveSubtask = (index: number) => {
    const newSubtasks = [...task.subtasks];
    newSubtasks.splice(index, 1);
    setTask({ ...task, subtasks: newSubtasks });
  }; 

  
  const handleSubmit = async () => {
    const newTaskData: TaskType= {
      board: boardId.toString(), 
      title: task.title,
      index,
      description: task.description,
      status: task.status,
      subtasks: task.subtasks,
    };
  

    await dispatch(createNewTaskAsync(newTaskData));
    await dispatch(getBoardAsync(boardData._id));
    dispatch(reloadTask(!reloadTaskSliceFlag));
    
    setTask({
      title: '',
      description: '',
      status: '',
      subtasks: [],
    });
    onTaskCreate();
    
  };
  

  return (
    <Modal
      open={isOpen}
      onClose={onTaskCreate}
      aria-labelledby="task-modal-title"
      aria-describedby="task-modal-description"
    >
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-2 overflow-y-auto ">
        <div className="bg-[#33373B] w-full max-w-md rounded-lg shadow-lg">
          <div className="text-white p-4 space-y-4">
            <div className="text-xl font-bold mb-4 flex justify-between">
              <div>Add New Task</div>
              <div><button type="button" className="text-gray-400 hover:text-red-500" onClick={onClose}>&#x2715;</button></div>
              </div>
            <div className="space-y-2">
              <div className="text-sm text-white">Title</div>
              <TextField
                id="title"
                className=" text-white border border-[#525960] rounded py-2 px-3 block w-full"
                InputProps={{ className: "text-white", disableUnderline: true, style: {color: '#fff'} }}
                name="title"
                value={task.title}
                onChange={handleChange}
                variant="filled"
              />
            </div>
            
            <div className="space-y-2">
              <div className="text-sm text-white">Description</div>
              <TextField
                id="description"
                className=" text-white border border-[rgba(130, 143, 163, 0.25)] rounded py-2 px-3 block w-full"
                InputProps={{ className: "text-white", disableUnderline: true, style: {color: '#fff'} } }
                name="description"
                value={task.description}
                onChange={handleChange}
                multiline
                rows={4}
                variant="filled"
              />
            </div>            
            <div className="space-y-2">
            <div className="text-sm font-bold mb-4 text-white">Subtasks</div>
            {task.subtasks.map((subtask, index) => (
              <div key={index} className="flex items-center gap-2">
                <TextField
                  className="text-white border border-gray-700 rounded py-2 px-3 block w-full"
                  InputProps={{ className: "text-white", disableUnderline: true, style: {color: '#fff'} }}
                  value={subtask}
                  onChange={handleSubtaskChange(index)}
                  variant="filled"
                />
                <button
                  type="button"
                  className="text-gray-400 hover:text-red-500" 
                  onClick={() => handleRemoveSubtask(index)}
                >
                  &#x2715; 
                </button>
              </div>
            ))}
            <button
              type="button"
              className="bg-mainPurple text-white w-full py-2 rounded-full transition duration-300 ease-in-out hover:bg-primary-dark"
              onClick={handleAddSubtask}
            >
              + Add New Subtask
            </button>
          </div>
            
            <div className="space-y-2">
              <div className="text-sm text-white">Status</div>
              <Select
                labelId="status-label"
                id="status"
                name="status"
                value={task.status}
                onChange={handleStatusChange}
                className="bg-[#2A2E33] text-white border border-[#525960] rounded py-2 px-3 block w-full"
                inputProps={{ 'aria-label': 'Status' }}
                style={{color: '#fff'}}
              >
                {
                  columns.map(column => (
                    <MenuItem value={column}>{column}</MenuItem>
                  ))
                }
              </Select>
            </div>

            
            {boardData.columns.length !== 0 ? (<button
              type="button"
              className="bg-mainPurple text-white w-full py-2 rounded-full transition duration-300 ease-in-out hover:bg-primary-dark"
              onClick={handleSubmit}
            >
              Create Task
            </button>) : (<button
              type="button"
              className="bg-mainPurple text-white w-full py-2 rounded-full transition duration-300 ease-in-out hover:bg-primary-dark cursor-not-allowed"
            >
              Create new column first
            </button>)}
          </div>
        </div>
      </div>
    </Modal>
);
  
};

export default TaskCard;
