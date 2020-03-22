import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

export interface IAccount {
    email: string,
    password: string,
}

const accountSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 4 },
});

accountSchema.plugin(uniqueValidator);

const Account = mongoose.model('Account', accountSchema);

export default Account;
