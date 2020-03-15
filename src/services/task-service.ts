import Task, { ITask } from '../models/task';

const createOne = async (task: ITask) => {
  const createdTask = new Task({
    title: task.title,
    content: task.content,
    status: task.status,
  });
  return createdTask.save();
};

const TaskService = {
  createOne,
};

export default TaskService;
