import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TUser, TUserLogin } from './auth.interface';
import { userModel } from './auth.model';
import config from '../../config';
import { generateToken } from './auth.utils';
import jwt, { JwtPayload } from 'jsonwebtoken';
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

  //throwing error if the user doesn't exist
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  //checking if the password is correct or not and throwing error if the password doesn't match
  if (
    !(await userModel.doesPasswordMatch(
      userLoginData?.password,
      user?.password,
    ))
  ) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password does not match');
  }

  //creating payload
  const jwtPayload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };

  //creating access token
  const accessToken = generateToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  //creating refresh token
  const refreshToken = generateToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  //sending token to client
  return { user, accessToken, refreshToken };
};
/*

----------------service function for refresh token----------------*/
const refreshToken = async (token: string) => {
  //verifying the token
  const decoded = jwt.verify(
    token,
    config.jwt_access_secret as string,
  ) as JwtPayload;

  //destructuring necessary properties
  const { email, iat } = decoded;

  //checking if the user exists or not and throwing error if the user doesn't exist
  const user = await userModel.doesUserExist(email);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  //creating payload
  const jwtPayload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };

  //creating access token
  const accessToken = generateToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return {
    accessToken,
  };
};

//exporting all the service functions through authServices object
export const authServices = {
  saveUserIntoDB,
  loginUser,
  refreshToken,
};
