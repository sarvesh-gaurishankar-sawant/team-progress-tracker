import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SubtaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    task: {
        type: String,
        required: true
    },
    isComplete: {
        type: Boolean,
        required: true
    }
},
{
    versionKey: false
});

const SubtaskModel = mongoose.model('course', SubtaskSchema);

export default SubtaskModel;