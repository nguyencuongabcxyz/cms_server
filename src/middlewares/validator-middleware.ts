import { NextFunction, Request, Response } from 'express';
import { validationResult, ValidationError } from 'express-validator';
import ResponsedError from '../models/responsedError';
import IError from '../models/error';

export default function ValidatorMiddleware(req: Request, res: Response, next: NextFunction) {
  const result = validationResult(req);
  console.log(result.array());
  if (!result.isEmpty()) {
    const responsedError: IError = {
      resonse: 'Validation error!',
      errorMessages: result.array().map((item: ValidationError) => item.msg),
    }
    return res.status(400).send({ errors: responsedError });
  }
  next();
}
