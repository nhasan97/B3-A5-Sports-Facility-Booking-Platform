import { z } from 'zod';

//---------------------Validation schema for creating facility---------------------
const createFacilityValidationSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be string',
    })
    .trim(),

  description: z
    .string({
      required_error: 'Description is required',
      invalid_type_error: 'Description must be string',
    })
    .trim(),

  pricePerHour: z
    .number({
      required_error: 'Price per hour is required',
      invalid_type_error: 'Price per hour must be a number',
    })
    .nonnegative({ message: 'Price per hour cannot be a negative number' })
    .finite({ message: 'Price per hour must be finite' }),

  location: z
    .string({
      required_error: 'Location is required',
      invalid_type_error: 'Location must be string',
    })
    .trim(),
});

//---------------------Validation schema for updating facility---------------------
const updateFacilityValidationSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be string',
    })
    .trim()
    .optional(),

  description: z
    .string({
      required_error: 'Description is required',
      invalid_type_error: 'Description must be string',
    })
    .trim()
    .optional(),

  pricePerHour: z
    .number({
      required_error: 'Price per hour is required',
      invalid_type_error: 'Price per hour must be a number',
    })
    .nonnegative({ message: 'Price per hour cannot be a negative number' })
    .finite({ message: 'Price per hour must be finite' })
    .optional(),

  location: z
    .string({
      required_error: 'Location is required',
      invalid_type_error: 'Location must be string',
    })
    .trim()
    .optional(),
});

//exporting validation schemas through facilityValidations object
export const facilityValidations = {
  createFacilityValidationSchema,
  updateFacilityValidationSchema,
};
