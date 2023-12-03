import mongoose from "mongoose";
import { Document } from "mongoose";

const Schema = mongoose.Schema;

export interface ISubtask extends Document {
    id: string;
    title: string;
    task: string;
}

const SubtaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    task: {
        type: String,
        required: true
    }
},
{
    versionKey: false
});

const SubtaskModel = mongoose.model('course', SubtaskSchema);

export default SubtaskModel;