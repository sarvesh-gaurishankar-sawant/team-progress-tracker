import mongoose from "mongoose";
import Task from "./task.js";

const Schema = mongoose.Schema;

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
        type: mongoose.Schema.Types.ObjectId,
        ref: Task,
        required: false
    }]
},
{
    versionKey: false
});

const BoardModel = mongoose.model('board', BoardSchema);

export default BoardModel;