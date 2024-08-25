import mongoose from 'mongoose';
import { TErrorMessages, TGenericErrorResponse } from '../interface/error';

const CastErrorHandler = (
  error: mongoose.Error.CastError,
): TGenericErrorResponse => {
  const statusCode = 400;
  const errorMessages: TErrorMessages = [
    {
      path: error.path,
      message: error.message,
    },
  ];

  return {
    statusCode,
    message: 'validation error',
    errorMessages,
  };
};

export default CastErrorHandler;
