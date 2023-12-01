import e from 'express';
import Subtask from '../models/subtask.js'
import * as taskService from './task-service.js';


// create subtask
export const createSubtask = async (newSubtask) => {
    const { taskId, ...subtaskData } = newSubtask;
    const subtask = new Subtask(subtaskData);
    const subtaskSaved = await subtask.save();
    const task = await taskService.findTaskById(taskId);
    task.subtasks.push(subtaskSaved._id.toString());
    const updatedTask = await taskService.updateTask(taskId, task);
    return subtaskSaved;
}

// get all subtasks
export const getSubtask = async (taskId) => {
    const task = await taskService.findTaskById(taskId);
    const subtasks = await Subtask.find({ _id: { $in: task.subtasks } }).exec();
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