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