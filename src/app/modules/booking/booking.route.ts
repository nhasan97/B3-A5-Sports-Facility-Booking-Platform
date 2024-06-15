import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { bookingValidations } from './booking.validation';
import auth from '../../middlewares/auth';
import { userRole } from '../auth/auth.constant';
import { bookingControllers } from './booking.controllers';

const router = express.Router();

//------------route for saving booking data in DB------------
router.post(
  '/',
  auth(userRole.user),
  validateRequest(bookingValidations.createBookingValidationSchema),
  bookingControllers.createBooking,
);

export const bookingRoutes = router;
