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
        required: true
    },
    status: {
        type: String,
        required: false
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
        type: mongoose.Schema.Types.ObjectId,
        ref: Subtask,
        required: false
    }],
    priority: {
        type: String,
        required: false
    } 
},
{
    versionKey: false
});

const TaskModel = mongoose.model('task', TaskSchema);

export default TaskModel;