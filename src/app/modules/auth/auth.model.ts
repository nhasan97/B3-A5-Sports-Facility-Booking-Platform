import { Schema, model } from 'mongoose';
import { TUser } from './auth.interface';

//creating mongoose schema as the first layer of validation for user signup
const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'user'],
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
});

//creating and exporting model for user
export const userModel = model<TUser>('Users', userSchema);
