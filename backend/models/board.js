import mongoose from "mongoose";

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