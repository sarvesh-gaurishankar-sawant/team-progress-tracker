import { Document } from "mongoose";

export interface ITask extends Document {
    _id: string;
    title: string;
    description: string;
    dueDate: Date;
    status: string;
    label: string;
    attachmentPath: string;
    subtasks: string[];
    priority: string;
    board: string;
    index: number;
}