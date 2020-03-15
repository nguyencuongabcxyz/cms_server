import mongoose, { Document, Schema, Model } from 'mongoose';
import { createSchema, Type, typedModel } from 'ts-mongoose';


export interface ITask extends Document {
    title: string,
    content: string,
    status: string,
}

const taskSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  status: { type: String, required: true },
});

const Task: Model<ITask> = mongoose.model<ITask>('Task', taskSchema);

export default Task;
