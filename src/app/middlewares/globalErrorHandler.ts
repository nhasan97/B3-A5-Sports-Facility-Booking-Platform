/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';
import { TErrorMessages } from '../interface/error';
import { ZodError } from 'zod';
import config from '../config';
import ZodErrorHandler from '../errors/ZodErrorHandler';
import MongooseErrorHandler from '../errors/MongooseErrorHandler';
import CastErrorHandler from '../errors/CastErrorHandler';
import DuplicateErrorHandler from '../errors/DuplicateErrorHandler';
import AppError from '../errors/AppError';

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode = 500;
  let message = 'Something went wrong';
  let errorMessages: TErrorMessages = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

  if (error instanceof ZodError) {
    const handledError = ZodErrorHandler(error);
    statusCode = handledError.statusCode;
    message = handledError.message;
    errorMessages = handledError.errorMessages;
  } else if (error.name === 'ValidationError') {
    const handledError = MongooseErrorHandler(error);
    statusCode = handledError.statusCode;
    message = handledError.message;
    errorMessages = handledError.errorMessages;
  } else if (error.name === 'CastError') {
    const handledError = CastErrorHandler(error);
    statusCode = handledError.statusCode;
    message = handledError.message;
    errorMessages = handledError.errorMessages;
  } else if (error.code === 11000) {
    const handledError = DuplicateErrorHandler(error);
    statusCode = handledError.statusCode;
    message = handledError.message;
    errorMessages = handledError.errorMessages;
  } else if (error instanceof Error) {
    message = error.message;
    errorMessages = [
      {
        path: '',
        message: error.message,
      },
    ];
  } else if (error instanceof AppError) {
    statusCode = error.statusCode;
    message = error.message;
    errorMessages = [
      {
        path: '',
        message: error.message,
      },
    ];
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.node_env === 'development' ? error?.stack : null,
  });
};

export default globalErrorHandler;
