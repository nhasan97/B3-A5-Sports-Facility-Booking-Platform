import express from 'express';
import { facilityControllers } from './facility.controllers';
import validateRequest from '../../middlewares/validateRequest';
import { facilityValidations } from './facility.validation';

const router = express.Router();

//------------route for inserting new facility data in DB------------
router.post(
  '/',
  validateRequest(facilityValidations.createFacilityValidationSchema),
  facilityControllers.createFacility,
);

//------------route for updating facility data in DB------------
router.put(
  '/:id',
  validateRequest(facilityValidations.updateFacilityValidationSchema),
  facilityControllers.updateFacility,
);

//------------route for fetching all the facility data from DB------------
router.get('/', facilityControllers.getAllFacilities);

//exporting routes
export const facilityRoutes = router;
