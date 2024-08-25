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

//------------route for fetching all the booking data from DB------------
router.get('/', auth(userRole.admin), bookingControllers.getAllBookings);

//------------route for fetching user specific booking data from DB------------
router.get('/user', auth(userRole.user), bookingControllers.getUserBookings);

//------------route for deleting specific facility data from DB------------
router.delete('/:id', auth(userRole.user), bookingControllers.cancelBooking);

export const bookingRoutes = router;
