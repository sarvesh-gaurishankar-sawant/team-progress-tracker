import e from 'express';
import Subtask from '../models/subtask'


// create subtask
export const createSubtask = async (newSubtask) => {
    const subtask = new Subtask(newSubtask);
    return await subtask.save();
}

// get all subtasks
export const getSubtask = async () => {
    const subtasks = await Subtask.find().exec();
    return subtasks;
}

// find subtask by id
export const findSubtaskById = async (id) => {
    const subtask = await Subtask.findById(id).exec();
    return subtask;
}

// update subtask
export const updateSubtask = async (updatedSubtask, id) => {
    const subtask = await Subtask.findByIdAndUpdate(id, updatedSubtask, { new: true }).exec();
    return await subtask.save();
}


// delete subtask
export const deleteSubtask = async (id) => {
    return await Subtask.findByIdAndDelete(id).exec();
}