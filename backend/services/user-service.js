import e from 'express';
import User from '../models/user.js';

// create user
export const createUser = async (newUser) => {
    const user = new User(newUser);
    return await user.save();
}

// get all users
export const getUsers = async () => {
    const users = await User.find().exec();
    return users;
}

// find user by id
export const findUserById = async (id) => {
    const user = await User.findById(id).exec();
    return user;
}

// update user
export const updateUser = async (updatedUser, id) => {
    const user = await User.findByIdAndUpdate(id, updatedUser, { new: true }).exec();
    return await user.save();
}


// delete user
export const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id).exec();
}