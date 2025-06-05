'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { submitContactFormAction, type ContactFormState } from '@/app/actions/contact';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label }
from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Send, Loader2 } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      Send Message
    </Button>
  );
}

const ContactForm = () => {
  const initialState: ContactFormState = { success: false };
  const [state, formAction] = useFormState(submitContactFormAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success && state.message) {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
      formRef.current?.reset(); // Reset form on success
    } else if (state?.error && !state.fieldErrors) {
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: state.error,
      });
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6 max-w-lg mx-auto bg-card p-6 sm:p-8 rounded-xl shadow-xl">
      <div>
        <Label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</Label>
        <Input id="name" name="name" type="text" autoComplete="name" required aria-describedby="name-error" />
        {state?.fieldErrors?.name && (
          <p id="name-error" className="text-sm text-destructive mt-1">
            {state.fieldErrors.name.join(', ')}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</Label>
        <Input id="email" name="email" type="email" autoComplete="email" required aria-describedby="email-error" />
         {state?.fieldErrors?.email && (
          <p id="email-error" className="text-sm text-destructive mt-1">
            {state.fieldErrors.email.join(', ')}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="block text-sm font-medium mb-1">Message</Label>
        <Textarea id="message" name="message" rows={4} required aria-describedby="message-error" />
        {state?.fieldErrors?.message && (
          <p id="message-error" className="text-sm text-destructive mt-1">
            {state.fieldErrors.message.join(', ')}
          </p>
        )}
      </div>
      
      <SubmitButton />
    </form>
  );
};

export default ContactForm;
