import express from 'express';
import UserController from '../controllers/user-controller';

const router = express.Router();

router.get('/', UserController.getAll);
router.get('/:id', UserController.getOne);
router.post('/', UserController.createOne);

export default router;
