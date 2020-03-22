import { Request, Response, NextFunction } from 'express';
import { check, body, validationResult } from 'express-validator';
import ResponsedError from '../models/responsedError';
import ValidatorMiddleware from '../middlewares/validator-middleware';

const signUp = [
  check('email').isEmail().exists().notEmpty(),
  check('password').exists().notEmpty().isLength({ min: 4 }),
  ValidatorMiddleware,
];

const AuthValidator = {
  signUp,
};

export default AuthValidator;
