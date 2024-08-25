/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorMessages, TGenericErrorResponse } from '../interface/error';

const DuplicateErrorHandler = (error: any): TGenericErrorResponse => {
  const matchedResult = error.message.match(/"([^"]*)"/);
  const extractedMessage = matchedResult && matchedResult[1];

  const statusCode = 400;
  const errorMessages: TErrorMessages = [
    {
      path: '',
      message: 'email ' + extractedMessage + ' is already registered!',
    },
  ];

  return {
    statusCode,
    message: 'validation error',
    errorMessages,
  };
};

export default DuplicateErrorHandler;
