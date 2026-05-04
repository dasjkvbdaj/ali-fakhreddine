import { Navbar } from "@/components/portfolio/Navbar";
import { Section } from "@/components/portfolio/Section";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/portfolio/SEO";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Terms of Service" 
        description="Terms of service for Ali Fakhreddine's portfolio website. Guidelines for using this site."
        url="https://ali-fakhreddine.vercel.app/terms"
      />
      <Navbar />
      <main>
        <Section id="terms" title="Terms of Service" level="h1">
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
                  <h2 className="text-2xl font-semibold text-foreground">1. Agreement to Terms</h2>
                  <p>
                    By accessing this website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">2. Use License</h2>
                  <p>
                    Permission is granted to temporarily view the materials (information or software) on Ali Fakhreddine's website for personal, non-commercial transitory viewing only.
                  </p>
                  <p>
                    This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>modify or copy the materials;</li>
                    <li>use the materials for any commercial purpose, or for any public display;</li>
                    <li>attempt to decompile or reverse engineer any software contained on the website;</li>
                    <li>remove any copyright or other proprietary notations from the materials.</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">3. Disclaimer</h2>
                  <p>
                    The materials on this website are provided on an 'as is' basis. I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">4. Limitations</h2>
                  <p>
                    In no event shall Ali Fakhreddine or his suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">5. Governing Law</h2>
                  <p>
                    These terms and conditions are governed by and construed in accordance with the laws of Lebanon and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
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

export default Terms;
