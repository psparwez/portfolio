import { z } from 'zod';

export const formSchema = z.object({
  fullName: z.string().min(3).max(50),
  email: z.string().email('Invalid email address'),
  message: z.string().min(5, 'Message must be at least 5 characters'),
});
