import { Section } from "./Section";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { Footer } from "./Footer";

export const Contact = () => {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something."
      description="Open to backend, full-stack, and engineering roles — locally and internationally."
    >
      <div className="portfolio-card sm:p-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>

      <Footer />
    </Section>
  );
};