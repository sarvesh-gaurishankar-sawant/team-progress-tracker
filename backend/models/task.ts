import mongoose from "mongoose";
import { Document } from "mongoose";
import Subtask from "./subtask.js";

const Schema = mongoose.Schema;

export interface ITask extends Document {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    status: string;
    label: string;
    attachmentPath: string;
    subtasks: string[];
    priority: string;
    board: string;
}

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: false
    },
    attachmentPath: {
        type: String,
        required: false
    },
    subtasks: [{
        type: String,
        required: false
    }],
    priority: {
        type: String,
        required: false
    },
    board: {
        type: String,
        required: true
    }
},
{
    versionKey: false
});

const TaskModel = mongoose.model('task', TaskSchema);

export default TaskModel;