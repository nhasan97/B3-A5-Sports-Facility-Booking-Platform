import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utilities/catchAsync';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { TUserRole } from '../modules/auth/auth.interface';
import { userModel } from '../modules/auth/auth.model';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    //checking if the token exists or not
    if (!token) {
      //throwing error if there is no token
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
    }

    //verifying the token
    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload;

    //destructuring necessary properties
    const { email, role, iat } = decoded;

    //checking if the user exists or not
    const user = await userModel.doesUserExist(email);
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    //checking if the role of token matches with the allowed role(s) for the route or not
    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
    }

    //setting decoded in user field of request
    req.user = decoded as JwtPayload;

    next();
  });
};

export default auth;
