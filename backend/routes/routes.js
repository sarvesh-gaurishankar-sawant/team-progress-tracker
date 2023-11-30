import express from 'express';
import * as userController from '../controllers/user-controller.js'
import * as subtaskController from '../controllers/subtask-controller.js'

const router = express.Router();

router.route('/')
    .post(userController.createUser)
    .get(userController.getUsers)
    .post(subtaskController.createSubtask)
    .get(subtaskController.getSubtasks);


router.route('/:id')
    .get(userController.findUserById)
    .put(userController.updateUser)
    .delete(userController.deleteUser)
    .get(subtaskController.findSubtaskById)
    .put(subtaskController.updateSubtask)
    .delete(subtaskController.deleteSubtask);

export default router;