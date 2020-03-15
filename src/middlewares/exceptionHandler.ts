import { Request, Response, NextFunction } from 'express';
import ResponsedError from '../models/responsedError';

export default function ExceptionHandler(
  error: ResponsedError,
  req:Request,
  res: Response,
  next: NextFunction,
) {
  if (res.headersSent) {
    return next(error);
  }
  res.status(error.statusCode || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
}
