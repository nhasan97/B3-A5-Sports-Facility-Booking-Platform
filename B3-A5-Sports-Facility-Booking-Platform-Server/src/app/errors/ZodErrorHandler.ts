import { ZodError, ZodIssue } from 'zod';
import { TErrorMessages, TGenericErrorResponse } from '../interface/error';

const ZodErrorHandler = (error: ZodError): TGenericErrorResponse => {
  const statusCode = 400;
  const errorMessages: TErrorMessages = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
    };
  });
  return {
    statusCode,
    message: 'validation error',
    errorMessages,
  };
};

export default ZodErrorHandler;
