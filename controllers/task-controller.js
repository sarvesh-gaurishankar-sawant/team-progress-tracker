import { request } from 'express';
import * as taskService from '../services/task-service.js';
import { setResponse, setErrorResponse } from './response-handler.js'

//Controller to create the task
export const createTask = async (request, response) => {
    try {
        //Creaate shallow copy of the body
        const completeTask = { ...request.body };
        //Call the service to store the task in db
        const task = await taskService.createTask(completeTask);
        //Set the response to be sent to the client
        setResponse(task, response)
    }
    catch(error){
        //Set the error response
        setErrorResponse(error, response);
    }
}

//Controller to find all tasks or based on query params
export const findTasks = async (request, response) => {
    try {
        //Save the query params
        const params = {...request.query};
        //Call the find task service
        const tasks = await taskService.findTasks(params);
        //Set the positive response
        setResponse(tasks, response)
    }catch(error){
        //Set the error response
        setErrorResponse(error, response);
    }
}

//Controller to delete the task
export const deleteTask = async (request, response) => {

    try {
        //Get the task id
        const taskId = request.params.id;
        //Remove the task
        const task = taskService.removeTask(taskId);
        //Set the response
        setResponse(task, response);
    }
    catch(error){
        //Set tge error response
        setErrorResponse(error);
    }
}

//Find the task by id
export const findTaskById = async(request, response) => {
    try {
        //Get the task id
        const taskId = request.params.id;

        //Find the task by id
        const task = await taskService.findTaskById(taskId);
        //Set the response
        setResponse(task, response);
    }
    catch(error){
        //Set the error response
        setErrorResponse(error);
    }
}


//Find the task by id and update it
export const updateTask = async(request, response) => {
    try {
        //Get the task id
        const taskId = request.params.id;
        //Get the task body
        const taskBody = request.body;
        //Update the task
        const task = await taskService.updateTask(taskId, taskBody);
        //Set the response
        setResponse(task, response);
    }
    catch(error){
        //Set the error response
        setErrorResponse(error);
    }
}

//Find the task by board id
export const getTasksByBoardId = async(request, response) => {
    try {
        //Get the board id
        const boardId = request.params.id;
        //Get the tasks
        const tasks = await taskService.getTasksByBoardId(boardId);
        //Set the response
        setResponse(tasks, response);
    }
    catch(error){
        //Set the error response
        setErrorResponse(error);
    }
}

//Find the task by user id
export const getTasksByUserId = async(request, response) => {
    try {
        //Get the user id
        const userId = request.params.id;
        //Get the tasks
        const tasks = await taskService.getTasksByUserId(userId);
        //Set the response
        setResponse(tasks, response);
    }
    catch(error){
        //Set the error response
        setErrorResponse(error);
    }
}

//Find the task by user id and board id
export const getTasksByUserIdAndBoardId = async(request, response) => {
    try {
        //Get the user id
        const userId = request.params.userId;
        //Get the board id
        const boardId = request.params.boardId;
        //Get the tasks
        const tasks = await taskService.getTasksByUserIdAndBoardId(userId, boardId);
        //Set the response
        setResponse(tasks, response);
    }
    catch(error){
        //Set the error response
        setErrorResponse(error);
    }
}

//Find the task by board id and user id
export const getTasksByBoardIdAndUserId = async(request, response) => {
    try {
        //Get the board id
        const boardId = request.params.boardId;
        //Get the user id
        const userId = request.params.userId;
        //Get the tasks
        const tasks = await taskService.getTasksByBoardIdAndUserId(boardId, userId);
        //Set the response
        setResponse(tasks, response);
    }
    catch(error){
        //Set the error response
        setErrorResponse(error);
    }
}

//Find the task by column id
export const getTasksByColumnId = async(request, response) => {
    try {
        //Get the column id
        const columnId = request.params.id;
        //Get the tasks
        const tasks = await taskService.getTasksByColumnId(columnId);
        //Set the response
        setResponse(tasks, response);
    }
    catch(error){
        //Set the error response
        setErrorResponse(error);
    }
}

//Find the task by column id and board id
export const getTasksByColumnIdAndBoardId = async(request, response) => {
    try {
        //Get the column id
        const columnId = request.params.columnId;
        //Get the board id
        const boardId = request.params.boardId;
        //Get the tasks
        const tasks = await taskService.getTasksByColumnIdAndBoardId(columnId, boardId);
        //Set the response
        setResponse(tasks, response);
    }
    catch(error){
        //Set the error response
        setErrorResponse(error);
    }
}

//Find the task by column id and user id
export const getTasksByColumnIdAndUserId = async(request, response) => {
    try {
        //Get the column id
        const columnId = request.params.columnId;
        //Get the user id
        const userId = request.params.userId;
        //Get the tasks
        const tasks = await taskService.getTasksByColumnIdAndUserId(columnId, userId);
        //Set the response
        setResponse(tasks, response);
    }
    catch(error){
        //Set the error response
        setErrorResponse(error);
    }
}

//Find the task by column id, user id and board id
export const getTasksByColumnIdAndUserIdAndBoardId = async(request, response) => {
    try {
        //Get the column id
        const columnId = request.params.columnId;
        //Get the user id
        const userId = request.params.userId;
        //Get the board id
        const boardId = request.params.boardId;
        //Get the tasks
        const tasks = await taskService.getTasksByColumnIdAndUserIdAndBoardId(columnId, userId, boardId);
        //Set the response
        setResponse(tasks, response);
    }
    catch(error){
        //Set the error response
        setErrorResponse(error);
    }
}