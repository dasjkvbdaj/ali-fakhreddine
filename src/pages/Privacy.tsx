import { Navbar } from "@/components/portfolio/navigation/Navbar";
import { Section } from "@/components/portfolio/layout/Section";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/portfolio/layout/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Privacy Policy" 
        description="Privacy policy for Ali Fakhreddine's portfolio website. Learn how your data is handled."
        url="https://ali-fakhreddine.vercel.app/privacy"
      />
      <Navbar />
      <main>
        <Section id="privacy" title="Privacy Policy" level="h1">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>

              <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
                  <p>
                    Welcome to Ali Fakhreddine's Portfolio. I respect your privacy and am committed to protecting your personal data. This privacy policy will inform you as to how I look after your personal data when you visit my website and tell you about your privacy rights and how the law protects you.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">2. The Data I Collect</h2>
                  <p>
                    I may collect, use, store and transfer different kinds of personal data about you which I have grouped together as follows:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Identity Data:</strong> includes first name, last name (provided via contact form).</li>
                    <li><strong>Contact Data:</strong> includes email address and telephone number (provided via contact form).</li>
                    <li><strong>Usage Data:</strong> includes information about how you use my website.</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">3. How I Use Your Data</h2>
                  <p>
                    I will only use your personal data for the purpose for which I collected it, which includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To contact you in response to a query sent via the contact form.</li>
                    <li>To improve my website and user experience.</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">4. Data Security</h2>
                  <p>
                    I have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">5. Contact Information</h2>
                  <p>
                    If you have any questions about this privacy policy or my privacy practices, please contact me via the contact form on the main page or directly at my email.
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </Section>
      </main>
    </div>
  );
};

export default Privacy;
