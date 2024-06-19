import express from 'express';
import { checkAvailabilityControllers } from './checkAvailability.controller';

const router = express.Router();

router.get('/', checkAvailabilityControllers.checkAvailability);

export const checkAvailabilityRoutes = router;
