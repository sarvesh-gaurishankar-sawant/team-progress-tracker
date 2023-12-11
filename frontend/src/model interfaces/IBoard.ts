import { Document } from "mongoose";

export interface IBoard extends Document {
    _id: string;
    name: string;
    columns: string[];
    tasks: string[];
    user: string;
}