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