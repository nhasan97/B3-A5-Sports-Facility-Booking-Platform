import { Schema, model } from 'mongoose';
import { TUser } from './auth.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

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
    unique: true,
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

//using document middleware for hashing password before saving document in DB
userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.salt_rounds));
  next();
});

//using document middleware for hiding password field in response
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

//creating and exporting model for user
export const userModel = model<TUser>('Users', userSchema);
