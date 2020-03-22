import mongoose, { Schema } from 'mongoose';


export interface ITask {
    title: string,
    content: string,
    status: string,
}

const taskSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  status: { type: String, required: true },
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
