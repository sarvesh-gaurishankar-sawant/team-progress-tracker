
export type Board = {
    columns: string[];
    name: string;
    tasks: string[];
    _id: string;
  }

export type TaskType = {
    description: string,
    index: number,
    status: string,
    subtask: string[],
    title: string,
    _id: string
}