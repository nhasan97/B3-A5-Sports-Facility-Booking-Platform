import { RequestHandler } from 'express';
import { sendResponse } from '../utilities/sendResponse';
import httpStatus from 'http-status';

const notFound: RequestHandler = (req, res, next) => {
  sendResponse(res, httpStatus.NOT_FOUND, true, 'Not Found');
};

export default notFound;
