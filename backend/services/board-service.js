import Board from "../models/board.js";
import * as userService from "./user-service.js"

//Save the board to the db
export const save = async (completeBoard) => {
  
    const board = new Board(completeBoard);
    const response = await board.save();
    const user = await userService.findUserById(board.user);
    user.boards.push(response._id.toString());
   await userService.updateUser(user, board.user);
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
    const board = await Board.findById(id).exec();
    const user = await userService.findUserById(board.user);
    user.boards = user.boards.remove(board._id.toString());
    await userService.updateUser(user, user._id.toString());
    return await Board.findByIdAndDelete(id).exec();
    //Return the deleted board
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