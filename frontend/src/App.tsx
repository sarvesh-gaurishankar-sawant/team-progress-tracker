import TaskViewModal from "./components/modals/task-view-modal";

export default function App() {
  // need to get rid of hard coded values
  const taskId = "6569ebee95a139a036ae352e"; // Replace with the actual value for your parameter
  const boardId = "656c2fd50fd3446bad8bbacb"; // Replace with the actual value for your parameter
  return (
    <div>
      {/* Render TaskViewModal and pass the parameter */}
      <TaskViewModal taskId={taskId} boardId={boardId} />
    </div>
  );
}