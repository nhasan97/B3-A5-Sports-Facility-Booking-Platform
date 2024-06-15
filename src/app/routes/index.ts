import express from 'express';
import { facilityRoutes } from '../modules/facility/facility.route';
import { authRoutes } from '../modules/auth/auth.route';
import { bookingRoutes } from '../modules/booking/booking.route';

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
];

moduleRoutes.forEach((moduleRoute) =>
  router.use(moduleRoute.path, moduleRoute.routes),
);

export default router;
