import * as boardService from '../services/board-service.js';
import { setResponse, setErrorResponse } from './response-handler.js'

//Controller to create the board
export const createBoard = async (request, response) => {
    try {
        //Creaate shallow copy of the body
        const completeBoard = { ...request.body };
        //Call the service to store the board in db
        const board = await boardService.save(completeBoard);
        //Set the response to be sent to the client
        setResponse(board, response)
    }
    catch(error){
        //Set the error response
        setErrorResponse(error, response);
    }
}

//Controller to find all boards or based on query params 
export const findBoards = async (request, response) => {
    try {
        //Save the query params
        const params = {...request.query};
        //Call the find board service
        const boards = await boardService.find(params);
        //Set the positive response
        setResponse(boards, response)
    }catch(error){
        //Set the error response
        setErrorResponse(error, response);
    }
}

//Controller to delete the board
export const deleteBoard = async (request, response) => {

    try {
        //Get the board id
        const boardId = request.params.id;
        //Remove the board
        const board = boardService.remove(boardId);
        //Set the response
        setResponse(board, response);
    }
    catch(error){
        //Set tge error response
        setErrorResponse(error);
    }
}