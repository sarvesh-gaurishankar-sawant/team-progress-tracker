import * as subtaskService from '../services/subtask-service.js';
import mongoose from 'mongoose';
import { setResponse, setErrorResponse } from './response-handler.js';  

export const createSubtask = async (req, res) => {
    try {
        const reqBody = {...req.body};
        const subtask = await userService.createSubtask(reqBody);
        setResponse(subtask, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
}

export const getSubtasks = async (req, res) => {
    try {
        const subtask = await subtaskService.getSubtask();
        setResponse(subtask, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
}

export const findSubtaskById = async (req, res) => {
    try {
        const id = req.params.id;
        const subtask = await subtaskService.findSubtaskById(id);
        setResponse(subtask, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
}

export const updateSubtask = async (req, res) => {
    try {
        const id = req.params.id;
        const reqBody = {...req.body};
        const subtask = await subtaskService.updateSubtask(reqBody, id);
        setResponse(subtask, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
}

export const deleteSubtask = async (req, res) => {
    try {
        const id = req.params.id;
        await subtaskService.deleteSubtask(id);
        setResponse({ "message": "Subtask deleted successfully."}, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
}

