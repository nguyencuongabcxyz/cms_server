import express from 'express';
import TaskController from '../controllers/task-controller';

const router = express.Router();

router.get('/', TaskController.getAll);
router.get('/:id', TaskController.getOne);
router.post('/', TaskController.createOne);

export default router;
