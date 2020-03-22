import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import ResponsedError from '../models/responsedError';

export default function ValidatorMiddleware(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new ResponsedError('Invalid input!', 400));
  }
  next();
}
