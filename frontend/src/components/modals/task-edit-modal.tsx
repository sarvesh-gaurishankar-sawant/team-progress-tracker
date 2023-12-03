import Modal from '@mui/material/Modal';
import React, { useState } from "react";

interface TaskEditModalProps {
    taskId: string;
    boardId: string;
    // Replace with the actual type of your parameter
  }

const TaskEditModal: React.FC<TaskEditModalProps> = ({ taskId, boardId}) => {

    const [open, setOpen] = useState(true);
    const handleClose = async () => {
        console.log(`${boardId}`);
        setOpen(false);
      };
    return (
        <Modal open={open} onClose={handleClose} className="w-[566px] h-[1071px] bg-[#2b2c36]">
            <p>{taskId}</p>
        </Modal>
    );

}

export default TaskEditModal;