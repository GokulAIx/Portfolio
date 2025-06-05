'use server';

import { z } from 'zod';

const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export interface ContactFormState {
  message?: string;
  error?: string;
  fieldErrors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success?: boolean;
}

export async function submitContactFormAction(
  prevState: ContactFormState | undefined,
  formData: FormData
): Promise<ContactFormState> {
  const rawFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  };

  const validatedFields = ContactFormSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      error: "Validation failed. Please check your inputs.",
      fieldErrors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  // In a real application, you would send this data (e.g., via email, to a database, or to a service like Firebase/EmailJS)
  console.log("Contact form submission received:");
  console.log("Name:", validatedFields.data.name);
  console.log("Email:", validatedFields.data.email);
  console.log("Message:", validatedFields.data.message);

  // Simulate successful submission
  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
  };
}
