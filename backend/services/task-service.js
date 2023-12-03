import Task from '../models/task.ts';
import * as userService from './user-service.js';
import * as boardService from './board-service.js';

//Save the task
export const createTask = async (completeTask) => {
    const task = new Task(completeTask);
    const response = await task.save();
    const board = await boardService.findById(task.board);
    board.tasks.push(response._id.toString());
    await boardService.update(task.board, board);
    return response;
}

//Delete the task
export const removeTask = async (id) => {
    //Find the board by id and remove it
    const task = await Task.findById(id).exec();
    const board = await boardService.findById(task.board);
    board.tasks = board.tasks.remove(task._id.toString());
    await boardService.update(task.board, board);
    return await Task.findByIdAndDelete(id).exec();
}

//Update the task by id
export const updateTask = async (id, updatedTask) => {
    // find the task by id
    const task = await Task.findByIdAndUpdate(id, updatedTask, {new : true}).exec();

    // return the response
    return task;
}

//Find the task by id
export const findTaskById = async (id) => {
    // find the task by id
    const task = await Task.findById(id).exec();
    // return the task
    return task;
}

// get all tasks by board id
export const getTasksByBoardId = async (boardId) => {
    const board = await boardService.findById(boardId);
    const tasks = await Task.find({ _id: { $in: board.tasks } }).exec();
    return tasks;
}

// get all tasks by column id and board id
export const getTasksByColumnNameAndBoardId = async (columnName, boardId) => {
    const board = await boardService.findById(boardId);
    var  tasks = await Task.find({ _id: { $in: board.tasks }}).exec();
    tasks = tasks.filter(task => task.status === columnName);
    return tasks;
}