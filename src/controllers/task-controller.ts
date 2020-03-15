import { Response, Request } from 'express';
import TaskService from '../services/task-service';
import Task, { ITask } from '../models/task';

const getAll = (req: Request, res: Response) => {

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
  const result = await TaskService.createOne({ title, content, status });
};

const TaskController = {
  getAll,
  getOne,
  createOne,
};

export default TaskController;
