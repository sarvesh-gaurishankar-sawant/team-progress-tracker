import Task from '../models/task.js';
import * as userService from './user-service.js';
import * as boardService from './board-service.js';

//Save the task
export const createTask = async (completeTask) => {
    //Destructure the userId and task details
    const { boardId, ...newTask } = completeTask;
    //Create the instance of the task
    const task = new Task(newTask);
    //Save the task in db
    const response = await task.save();

    //save the task id in board
    const board = await boardService.findById(boardId);
    //Convert the userBody to an object
    const boardObject = board.toObject();
    //Push the task id to the user tasks array
    boardObject.tasks.push(response._id.toString());
    //Update the user
    const updatedboardBody = await boardService.update(boardId, boardObject);

    //Return the response
    return response;
}

//Delete the task
export const removeTask = async (id) => {
    //Find the board by id and remove it
    const task = await Task.findByIdAndDelete(id).exec();

    //Return the deleted task
    return task;
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