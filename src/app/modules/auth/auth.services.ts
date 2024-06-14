import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TUser, TUserLogin } from './auth.interface';
import { userModel } from './auth.model';
import jwt from 'jsonwebtoken';
import config from '../../config';
/*

----------------service function for saving user data in DB----------------*/
const saveUserIntoDB = async (userData: TUser) => {
  const response = await userModel.create(userData);
  return response;
};
/*

----------------service function for saving user data in DB----------------*/
const loginUser = async (userLoginData: TUserLogin) => {
  //checking if the user exists or not
  const user = await userModel.doesUserExist(userLoginData?.email);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  if (
    //checking if the password is correct or not
    !(await userModel.doesPasswordMatch(
      userLoginData?.password,
      user?.password,
    ))
  ) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password does not match');
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  //creating and sending token to client
  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '365d',
  });

  return { accessToken };
};

//exporting all the service functions through authServices object
export const authServices = {
  saveUserIntoDB,
  loginUser,
};
