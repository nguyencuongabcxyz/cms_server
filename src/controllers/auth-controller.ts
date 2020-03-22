import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

const signUp = (req: Request, res: Response) => {
  const errors = validationResult(req);
  console.log(errors);
  res.send('Abc');
};

const signIn = () => {

};

const AuthController = {
  signIn,
  signUp,
};

export default AuthController;
