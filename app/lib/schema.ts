import { z } from 'zod';

export const leadSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[+]?[\d\s()-]{7,20}$/.test(val),
      'Please enter a valid phone number'
    ),
  consent: z
    .boolean(),
});

export type LeadFormData = z.infer<typeof leadSchema>;
