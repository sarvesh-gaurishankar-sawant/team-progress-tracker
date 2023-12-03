import mongoose from "mongoose";
import { Document } from "mongoose";
import Board from "./board.js";

const Schema = mongoose.Schema;

export interface IUser extends Document {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNo: string;
    boards: string[];
}

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    boards: [{
        type: String,
        required: false
    }]
},
{
    versionKey: false
});

const UserModel = mongoose.model('user', UserSchema);

export default UserModel;