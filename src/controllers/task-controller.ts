import { Response, Request, NextFunction } from 'express';
import TaskService from '../services/task-service';
import Task, { ITask } from '../models/task';
import ResponsedError from '../models/responsedError';

const getAll = (req: Request, res: Response, next: NextFunction) => {
  console.log('Come here!');
  res.status(200).send({ title: 'OK' });
};

const getOne = (req: Request, res: Response) => {
};

const createOne = async (req: Request, res: Response) => {
  const { title, content, status } = req.body;
  const task: ITask = {
    title,
    content,
    status,
  };
  const result = await TaskService.createOne(task);
  res.send(result);
};

const TaskController = {
  getAll,
  getOne,
  createOne,
};

export default TaskController;
