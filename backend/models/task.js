import mongoose from "mongoose";
import Subtask from "./subtask.js";

const Schema = mongoose.Schema;

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
        required: false
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
    index: {
        type: Number,
        required: true,
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