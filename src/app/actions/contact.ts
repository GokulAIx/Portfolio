
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

const RECIPIENT_EMAIL = "polavarapugokul@gmail.com";

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

  // In a real application, you would integrate an email sending service here.
  // For example, using Resend, SendGrid, Nodemailer with an SMTP provider, etc.
  //
  // Example (conceptual - would require installing and configuring an email library):
  // try {
  //   const emailClient = new EmailClient({ apiKey: process.env.EMAIL_API_KEY });
  //   await emailClient.send({
  //     from: 'Your Portfolio <noreply@yourdomain.com>',
  //     to: RECIPIENT_EMAIL,
  //     reply_to: validatedFields.data.email,
  //     subject: `New Contact Form Submission from ${validatedFields.data.name}`,
  //     html: `<p>Name: ${validatedFields.data.name}</p>
  //            <p>Email: ${validatedFields.data.email}</p>
  //            <p>Message: ${validatedFields.data.message}</p>`,
  //   });
  //   console.log("Email sent successfully to:", RECIPIENT_EMAIL);
  // } catch (error) {
  //   console.error("Failed to send email:", error);
  //   return {
  //     error: "There was an issue sending your message. Please try again later.",
  //     success: false,
  //   };
  // }

  console.log("Contact form submission received:");
  console.log("Intended Recipient:", RECIPIENT_EMAIL);
  console.log("Sender Name:", validatedFields.data.name);
  console.log("Sender Email:", validatedFields.data.email);
  console.log("Message:", validatedFields.data.message);
  console.log("--- This is a simulation. In a real app, an email would be sent. ---");


  // Simulate successful submission for now
  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
  };
}
