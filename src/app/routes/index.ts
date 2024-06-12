import express from 'express';
import { facilityRoutes } from '../modules/facility/facility.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/facility',
    routes: facilityRoutes,
  },
];

moduleRoutes.forEach((moduleRoute) =>
  router.use(moduleRoute.path, moduleRoute.routes),
);

export default router;
