import { SortableContext } from "@dnd-kit/sortable";
import { DndContext } from "@dnd-kit/core";
import { TaskType } from "../type";
import Task from "../Tasks/Task";

interface Props {
  columnTitle: string;
  tasksObjectArray: TaskType[];
  key: number;
}

export default function Column({ columnTitle,  tasksObjectArray, key}: Props) {

  //Filter task object
  const filterTasksData = tasksObjectArray.filter(task => task.status === columnTitle)

  //Display task previews on column
  const tasksPreviewData = filterTasksData.map(taskPreviewData => {
    return(
      <Task key={taskPreviewData._id} task={taskPreviewData}/>
    )
  })

  //Get all ids
  const tasksIds = filterTasksData.map(task => task._id)
  
  return (
    <DndContext>
      <div className="w-72">
        {/* Column Title */}
        <div key={key} className="mb-6">{columnTitle}</div>
        {/* Tasks */}
        {<SortableContext items={tasksIds}>{tasksPreviewData}</SortableContext>}
      </div>
    </DndContext>
  )
}
