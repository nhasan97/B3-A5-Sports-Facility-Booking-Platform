import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utilities/catchAsync';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { TUserRole } from '../modules/auth/auth.interface';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    //checking if the token exists or not
    if (!token) {
      //throwing error if there is no token
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
    }

    //verifying the token
    jwt.verify(
      token,
      config.jwt_access_secret as string,
      function (err, decoded) {
        // err
        if (err) {
          throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
        }
        // decoded
        if (
          requiredRoles &&
          !requiredRoles.includes((decoded as JwtPayload).role)
        ) {
          throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
        }
        req.user = decoded as JwtPayload;
        next();
      },
    );
  });
};

export default auth;
