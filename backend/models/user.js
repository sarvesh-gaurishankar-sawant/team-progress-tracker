import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    phoneNo: {
        type: String,
        required: false
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