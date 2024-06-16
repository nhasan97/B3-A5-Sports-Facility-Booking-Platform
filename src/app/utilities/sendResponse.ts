import { Response } from 'express';
import { TFacility } from '../modules/facility/facility.interface';
import { TBooking } from '../modules/booking/booking.interface';

// ----------------function for formatting and sending response to client----------------
export const sendResponse = (
  res: Response,
  statusCode: number,
  operationalStatus: boolean,
  message: string = 'Something went wrong!',
  toSend: TFacility | TBooking | unknown = null,
) => {
  if (toSend) {
    res.status(statusCode).json({
      success: operationalStatus,
      statusCode: statusCode,
      message: message,
      data: toSend,
    });
  } else {
    res.status(statusCode).json({
      success: operationalStatus,
      statusCode: statusCode,
      message: message,
    });
  }
};
