import express from 'express';
import { facilityControllers } from './facility.controllers';
import validateRequest from '../../middlewares/validateRequest';
import { facilityValidations } from './facility.validation';
import auth from '../../middlewares/auth';
import { userRole } from '../auth/auth.constant';

const router = express.Router();

//------------route for inserting new facility data in DB------------
router.post(
  '/',
  auth(userRole.admin),
  validateRequest(facilityValidations.createFacilityValidationSchema),
  facilityControllers.createFacility,
);

//------------route for updating facility data in DB------------
router.put(
  '/:id',
  auth(userRole.admin),
  validateRequest(facilityValidations.updateFacilityValidationSchema),
  facilityControllers.updateFacility,
);

//------------route for deleting specific facility data from DB------------
router.delete('/:id', auth(userRole.admin), facilityControllers.deleteFacility);

//------------route for fetching all the facility data from DB------------
router.get('/', facilityControllers.getAllFacilities);

//exporting routes
export const facilityRoutes = router;
