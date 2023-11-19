import * as boardController from "../controllers/board-controller.js";
import express from "express";

const router = express.Router();

router.route('/')
    .post(boardController.createBoard)

export default router;