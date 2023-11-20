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
    const boardBody = await boardService.findById(boardId);
    //Convert the userBody to an object
    const boardBodyObject = boardBody.toObject();
    //Push the task id to the user tasks array
    boardBodyObject.tasks.push(response._id);
    //Update the user
    const updatedboardBody = await boardService.update(boardId, boardBodyObject);

    //Return the response
    return response;
}

//Find the tasks
export const findTasks = async (params = {}) => {
    //Find all the tasks in the mongodb if the params is empty object
    const tasks = await Task.find(params).exec();
    //Return all the tasks
    return tasks;
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
    const task = await Task.findByIdAndUpdate(id, updatedTask).exec();

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