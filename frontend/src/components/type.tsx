
export type BoardType = {
    columns: string[];
    name: string;
    tasks: string[];
    _id: string;
  }

export type TaskType = {
    board?:string,
    description: string,
    index: number,
    status: string,
    subtasks: string[],
    title: string,
    _id?: string
}

export type UserType = {
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    phoneNo:string,
    boards: string[],
    _id:string
}

export type ColumnType = {
    columnTitle: string,
    tasksObjectArray: TaskType[],
    index: number,
    setTasksObjectArray: React.Dispatch<React.SetStateAction<TaskType[]>>
}