
'use server';

import { z } from 'zod';
import { Resend } from 'resend';

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

// Read environment variables
const RECIPIENT_EMAIL = process.env.CONTACT_FORM_RECIPIENT_EMAIL;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const EMAIL_SENDER_ADDRESS = process.env.EMAIL_SENDER_ADDRESS;

export async function submitContactFormAction(
  prevState: ContactFormState | undefined,
  formData: FormData
): Promise<ContactFormState> {
  if (!RECIPIENT_EMAIL) {
    console.error("CONTACT_FORM_RECIPIENT_EMAIL environment variable is not set.");
    return {
      error: "The contact form is currently not configured to send messages (recipient missing). Please contact the site administrator.",
      success: false,
    };
  }

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY environment variable is not set.");
    return {
      error: "The contact form is currently not configured to send messages (API key missing). Please contact the site administrator.",
      success: false,
    };
  }

  if (!EMAIL_SENDER_ADDRESS) {
    console.error("EMAIL_SENDER_ADDRESS environment variable is not set (e.g., 'Portfolio <noreply@yourverifieddomain.com>').");
    return {
      error: "The contact form is currently not configured to send messages (sender address missing). Please contact the site administrator.",
      success: false,
    };
  }

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

  const resend = new Resend(RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: EMAIL_SENDER_ADDRESS, // e.g., 'Your Portfolio <onboarding@resend.dev>' or your verified domain
      to: [RECIPIENT_EMAIL],
      reply_to: validatedFields.data.email,
      subject: `New Contact Form Submission from ${validatedFields.data.name}`,
      html: `<p>Name: ${validatedFields.data.name}</p>
             <p>Email: ${validatedFields.data.email}</p>
             <p>Message: ${validatedFields.data.message.replace(/\n/g, '<br>')}</p>`,
      text: `Name: ${validatedFields.data.name}\nEmail: ${validatedFields.data.email}\nMessage: ${validatedFields.data.message}`,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return {
        error: "There was an issue sending your message. Please try again later.",
        success: false,
      };
    }

    console.log("Email sent successfully via Resend:", data);
    return {
      message: "Thank you for your message! I'll get back to you soon.",
      success: true,
    };

  } catch (exception) {
    console.error("Failed to send email with Resend:", exception);
    // It's good to check the type of exception if possible, or log its structure.
    let errorMessage = "An unexpected error occurred while sending your message.";
    if (exception instanceof Error) {
      errorMessage = `An unexpected error occurred: ${exception.message}. Please try again later.`;
    } else if (typeof exception === 'object' && exception !== null && 'message' in exception) {
       errorMessage = `An unexpected error occurred: ${(exception as {message: string}).message}. Please try again later.`;
    }
    
    return {
      error: errorMessage,
      success: false,
    };
  }
}
