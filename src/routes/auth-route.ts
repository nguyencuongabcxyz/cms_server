import express from 'express';
import AuthController from '../controllers/auth-controller';
import AuthValidator from '../validator/auth-validator';

const router = express.Router();

router.post('/signup', AuthValidator.signUp, AuthController.signUp);
router.post('/signin', AuthController.signIn);

export default router;
