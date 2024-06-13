import { TUser } from './auth.interface';
import { userModel } from './auth.model';
/*

----------------service function for saving user data in DB----------------*/
const saveUserIntoDB = async (userData: TUser) => {
  const response = await userModel.create(userData);
  return response;
};

//exporting all the service functions through authServices object
export const authServices = {
  saveUserIntoDB,
};
