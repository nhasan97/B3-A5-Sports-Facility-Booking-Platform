import httpStatus from 'http-status';
import catchAsync from '../../utilities/catchAsync';
import { sendResponse } from '../../utilities/sendResponse';
import { authServices } from './auth.services';
import config from '../../config';
/*

----------------controller for inserting new user data in DB----------------*/
const userSignup = catchAsync(async (req, res, next) => {
  const response = await authServices.saveUserIntoDB(req.body);
  sendResponse(
    res,
    httpStatus.OK,
    true,
    'User registered successfully',
    response,
  );
});
/*

--------------------------controller for user login--------------------------*/
const userLogin = catchAsync(async (req, res, next) => {
  const response = await authServices.loginUser(req.body);
  const { accessToken, refreshToken } = response;

  res.cookie('refreshToken', refreshToken, {
    secure: config.node_env === 'production',
    httpOnly: true,
  });

  sendResponse(res, httpStatus.OK, true, 'User logged in successfully', {
    accessToken,
  });
});
/*

--------------------------controller for refresh token--------------------------*/
const refreshToken = catchAsync(async (req, res, next) => {
  const { refreshToken } = req.cookies;
  const response = await authServices.refreshToken(refreshToken);

  sendResponse(
    res,
    httpStatus.OK,
    true,
    'Access token generated successfully',
    response,
  );
});

//exporting all the controller functions through authControllers object
export const authControllers = {
  userSignup,
  userLogin,
  refreshToken,
};
