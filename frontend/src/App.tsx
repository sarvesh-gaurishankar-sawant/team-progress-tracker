import TaskViewModal from "./components/modals/task-view-modal";

export default function App() {
  const taskId = "656c307c0fd3446bad8bbade"; // Replace with the actual value for your parameter
  const boardId = "656c2fd50fd3446bad8bbacb"; // Replace with the actual value for your parameter
  return (
    <div>
      {/* Render TaskViewModal and pass the parameter */}
      <TaskViewModal taskId={taskId} boardId={boardId} />
    </div>
  );
}