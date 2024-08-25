import express from 'express';
import { facilityRoutes } from '../modules/facility/facility.route';
import { authRoutes } from '../modules/auth/auth.route';
import { bookingRoutes } from '../modules/booking/booking.route';
import { checkAvailabilityRoutes } from '../modules/checkAvailability/checkAvailability.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/facility',
    routes: facilityRoutes,
  },
  {
    path: '/auth',
    routes: authRoutes,
  },
  {
    path: '/bookings',
    routes: bookingRoutes,
  },
  {
    path: '/check-availability',
    routes: checkAvailabilityRoutes,
  },
];

moduleRoutes.forEach((moduleRoute) =>
  router.use(moduleRoute.path, moduleRoute.routes),
);

export default router;
