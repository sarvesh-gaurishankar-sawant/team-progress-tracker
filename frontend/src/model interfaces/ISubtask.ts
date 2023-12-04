import { Document } from "mongoose";

export interface ISubtask extends Document {
    id: string;
    title: string;
    task: string;
    isComplete: boolean;
}