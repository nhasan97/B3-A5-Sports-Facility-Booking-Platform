import { Model } from 'mongoose';
import { userRole } from './auth.constant';

//declaring type for user
export interface TUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: 'admin' | 'user';
  address: string;
}

//declaring type for user login
export type TUserLogin = {
  email: string;
  password: string;
};

export interface UserModel extends Model<TUser> {
  doesUserExist(email: string): Promise<TUser>;
  doesPasswordMatch(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}

export type TUserRole = keyof typeof userRole;
