import express from 'express';
import { facilityControllers } from './facility.controllers';
import validateRequest from '../../middlewares/validateRequest';
import { facilityValidations } from './facility.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(facilityValidations.createFacilityValidationSchema),
  facilityControllers.createFacility,
);

router.get('/', facilityControllers.getAllFacilities);

export const facilityRoutes = router;
