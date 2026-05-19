import { Section } from "../layout/Section";
import { ContactInfo } from "../info/ContactInfo";
import { ContactForm } from "./ContactForm";
import { Footer } from "../layout/Footer";

export const Contact = () => {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
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