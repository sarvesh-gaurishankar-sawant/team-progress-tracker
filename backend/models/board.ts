import mongoose from "mongoose";
import { Document } from "mongoose";
import Task from "./task.js";

const Schema = mongoose.Schema;

export interface IBoard extends Document {
    id: string;
    name: string;
    columns: string[];
    tasks: string[];
    user: string;
}

const BoardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    columns: {
        type: [String],
        required: true,

    },
    tasks: [{
        type: String,
        required: false
    }],
    user: {
        type: String,
        required: true
    }
},
{
    versionKey: false
});

const BoardModel = mongoose.model('board', BoardSchema);

export default BoardModel;