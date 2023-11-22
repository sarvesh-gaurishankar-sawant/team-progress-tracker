import * as tasksController from '../controllers/tasks-controller.js';
import express from 'express';

const router = express.Router();

router.route('/').post(tasksController.createTask).get(tasksController.findTasks);

router.route('/:id').delete(tasksController.deleteTask).get(tasksController.findTaskById).put(tasksController.updateTask);

router.route('/board/:boardId').get(tasksController.getTasksByBoardId);

router.route('/user/:userId').get(tasksController.getTasksByUserId);

router.route('/user/:userId/board/:boardId').get(tasksController.getTasksByUserIdAndBoardId);

router.route('/board/:boardId/user/:userId').get(tasksController.getTasksByBoardIdAndUserId);

router.route('/column/:columnId').get(tasksController.getTasksByColumnId);

router.route('/column/:columnId/board/:boardId').get(tasksController.getTasksByColumnIdAndBoardId);

router.route('/column/:columnId/user/:userId').get(tasksController.getTasksByColumnIdAndUserId);

router.route('/column/:columnId/board/:boardId/user/:userId').get(tasksController.getTasksByColumnIdAndBoardIdAndUserId);

export default router;