import mongoose from 'mongoose';
import { TErrorMessages, TGenericErrorResponse } from '../interface/error';

const MongooseErrorHandler = (
  error: mongoose.Error.ValidationError,
): TGenericErrorResponse => {
  const statusCode = 400;
  const errorMessages: TErrorMessages = Object.values(error.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    },
  );
  return {
    statusCode,
    message: 'validation error',
    errorMessages,
  };
};

export default MongooseErrorHandler;
