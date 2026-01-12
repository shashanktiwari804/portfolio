'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export type FormState = {
  message: string;
  success: boolean;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.message?.[0] || 'Validation failed.',
      success: false,
    };
  }

  // Simulate sending an email
  console.log('New Contact Form Submission:');
  console.log(validatedFields.data);

  // In a real app, you would send an email or save to a database here.
  // For example, using a service like Resend or Nodemailer.

  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: 'Your message has been sent successfully! I will get back to you shortly.',
    success: true,
  };
}