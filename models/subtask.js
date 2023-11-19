import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SubtaskSchema = new Schema({
    title: {
        type: String,
        required: true
    }
},
{
    versionKey: false
});

const SubtaskModel = mongoose.model('course', SubtaskSchema);

export default SubtaskModel;