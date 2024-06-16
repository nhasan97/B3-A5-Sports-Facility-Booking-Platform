import { z } from 'zod';

//---------------------Validation schema for creating booking---------------------
const createBookingValidationSchema = z.object({
  body: z
    .object({
      facility: z
        .string({
          required_error: 'Facility is required',
          invalid_type_error: 'Facility must be string',
        })
        .trim(),

      date: z
        .string({
          required_error: 'Date is required',
          invalid_type_error: 'Date must follow "YYYY-MM-DD" format',
        })
        .date(),

      startTime: z
        .string({
          required_error: 'Start time is required',
          invalid_type_error: 'Start time must be string',
        })
        .refine(
          (value) => /([01]?[0-9]|2[0-3]):[0-5][0-9]/.test(value ?? ''),
          'Please follow "HH:MM" format',
        ),
      endTime: z
        .string({
          required_error: 'End time is required',
          invalid_type_error: 'End time must be string',
        })
        .refine(
          (value) => /([01]?[0-9]|2[0-3]):[0-5][0-9]/.test(value ?? ''),
          'Please follow "HH:MM" format',
        ),
    })
    .refine(
      (body) => {
        const start = new Date(`1970-01-01T${body.startTime}:00`);
        const end = new Date(`1970-01-01T${body.endTime}:00`);
        return end > start;
      },
      {
        message:
          'Start time is passing End time! Please enter valid time range ',
      },
    ),
});

//exporting validation schemas through bookingValidations object
export const bookingValidations = {
  createBookingValidationSchema,
};
