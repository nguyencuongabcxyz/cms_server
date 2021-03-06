import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import Account from '../models/account';
import IError from '../models/error';
import BcryptUtil from '../utils/bcrypt-util';
import ResponsedError from '../models/responsedError';

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  const existingAccount = await Account.findOne({ email: req.body.email });
  if (existingAccount) {
    const responsedError: IError = {
      resonse: 'Account already exists',
      errorMessages: ['Account already exists, try to sign up with another account'],
    }
    res.status(400).send({ errors: responsedError });
  }
  try {
    const hashPassword = await BcryptUtil.hashPassword(req.body.password);
    const newAccount = new Account({
      email: req.body.email,
      password: hashPassword,
    })
    const createdAccount = await newAccount.save();
    res.send({ account: createdAccount });
  } catch (error) {
    next(new ResponsedError(error.message, 500));
  }
};

const signIn = () => {

};

const AuthController = {
  signIn,
  signUp,
};

export default AuthController;
