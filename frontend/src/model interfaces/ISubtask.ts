import { Document } from "mongoose";

export interface ISubtask extends Document {
    _id: string;
    title: string;
    task: string;
    isComplete: boolean;
}