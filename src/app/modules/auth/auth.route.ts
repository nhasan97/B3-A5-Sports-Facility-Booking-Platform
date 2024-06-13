import express from 'express';
import { authControllers } from './auth.controllers';
import validateRequest from '../../middlewares/validateRequest';
import { authValidations } from './auth.validation';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(authValidations.userSignupValidationSchema),
  authControllers.userSignup,
);

export const authRoutes = router;
