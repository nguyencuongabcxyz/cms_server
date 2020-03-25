import mongoose, { Schema, Document } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

export interface IAccount {
    email: string,
    password: string,
}

interface IAccountModel extends Document {
  email: string,
  password: string,
}

const accountSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 4 },
}, { timestamps: true });

accountSchema.plugin(uniqueValidator);

const Account = mongoose.model<IAccountModel>('Account', accountSchema);

export default Account;
