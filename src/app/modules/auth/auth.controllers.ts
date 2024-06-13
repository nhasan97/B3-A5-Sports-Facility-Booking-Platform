import httpStatus from 'http-status';
import catchAsync from '../../utilities/catchAsync';
import { sendResponse } from '../../utilities/sendResponse';
import { authServices } from './auth.services';
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

//exporting all the controller functions through authControllers object
export const authControllers = {
  userSignup,
};
