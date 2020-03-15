import { Response, Request } from 'express';
import ResponsedError from '../models/responsedError';

const getAll = (req: Request, res: Response) => {
  throw new ResponsedError('Error!', 404);
//   res.json({
//     user: {
//       id: '1',
//       name: 'cuong',
//     },
//   });
};

const getOne = (req: Request, res: Response) => {

};

const createOne = (req: Request, res: Response) => {

};

const UserController = {
  getAll,
  getOne,
  createOne,
};

export default UserController;
