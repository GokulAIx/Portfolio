import SectionContainer from '@/components/shared/section-container';
import ContactForm from '@/components/contact/contact-form';

const ContactSection = () => {
  return (
    <SectionContainer id="contact" title="Get In Touch">
      <p className="text-center text-muted-foreground mb-10 max-w-md mx-auto">
        Have a question, a project idea, or just want to connect? Feel free to reach out!
      </p>
      <ContactForm />
    </SectionContainer>
  );
};

export default ContactSection;
