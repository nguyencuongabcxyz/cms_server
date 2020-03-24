import { check } from 'express-validator';
import ValidatorMiddleware from '../middlewares/validator-middleware';

const signUp = [
  check('email', 'Email is required!').exists().bail().notEmpty(),
  check('email', 'Email is invalid!').isEmail(),
  check('password', "Password is required!'").exists().bail().notEmpty(),
  check('password', 'Password must have at least 4 characters').isLength({ min: 4 }),
  ValidatorMiddleware,
];

const AuthValidator = {
  signUp,
};

export default AuthValidator;
