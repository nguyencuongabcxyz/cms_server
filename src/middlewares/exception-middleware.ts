import { Request, Response, NextFunction } from 'express';
import ResponsedError from '../models/responsedError';
import IError from '../models/error';

export default function ExceptionMiddleware(
  error: ResponsedError,
  req:Request,
  res: Response,
  next: NextFunction,
) {
  if (res.headersSent) {
    return next(error);
  }
  res.status(error.statusCode || 500);
  const responsedError: IError = error.message
    ? {
      resonse: 'Error occurred at server!',
      errorMessages: [error.message],
    } : {
      resonse: 'Error occurred at server!',
      errorMessages: ['An unknown error occurred!'],
    };
  res.json({ errors: responsedError });
}
