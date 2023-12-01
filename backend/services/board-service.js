import Board from "../models/board.js"
import * as userService from "./user-service.js"

//Save the board to the db
export const save = async (completeBoard) => {
    //Destructure the userid and board details
    const { userId, ...newBoard } = completeBoard;
    //Create the instance of the board
    const board = new Board(newBoard);
    //Save the board in db
    const response = await board.save();

    //save the board id in user
    //Get the user
    const userBody = await userService.findUserById(userId);
    //Convert the userBody to an object
    const userBodyObject = userBody.toObject();
    //Push the board id to the user boards array
    userBodyObject.boards.push(response._id.toString());
    //Update the user
    const updatedUserBody = await userService.updateUser(userBodyObject, userId);

    //Return the response
    return response;
}

//Find the boards
export const find = async (userId) => {
    //Find all the boards in the mongodb if the params is empty object
    const user = await userService.findUserById(userId);
    let userBoards = [];
    if(user.boards.length > 0){
        userBoards = await Board.find({ _id: { $in: user.boards } }).exec();
    }
    return userBoards;
}

//Remove the board
export const remove = async (id) => {
    //Find the board by id and remove it
    const board = await Board.findByIdAndDelete(id).exec();
    //Return the deleted board
    return board;
}

//Update the board by id
export const update = async (id, updatedBoard) => {
    //Find the board by id
    const board = await Board.findByIdAndUpdate(id, updatedBoard, { new: true }).exec();
    //return the response
    return board;
}

//Find the board by id
export const findById = async(id) => {
    //Find the board by id
    const board = await Board.findById(id).exec();
    //Return the board
    return board;
}