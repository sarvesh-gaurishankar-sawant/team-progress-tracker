import React, { useState } from "react";
import TaskCard from "./components/TaskCard";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-4">
      <button onClick={openModal}>
        Open Task Modal
      </button>
      <TaskCard show={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
