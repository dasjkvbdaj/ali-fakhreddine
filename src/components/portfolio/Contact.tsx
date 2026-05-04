import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Section } from "./Section";
import { profile } from "@/data/portfolio";
import { GlowWord } from "./GlowWord";
import { ShimmerText, ShimmerHighlight } from "./TextAnimations";
import { Mail, Phone, Linkedin, Github, ArrowUpRight, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  first_name: z.string().min(2, "First name must be at least 2 characters"),
  last_name: z.string().min(2, "Last name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const links = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", value: "Connect", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "Browse code", href: profile.github },
];

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Reset status after 5 seconds
  useEffect(() => {
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => setSubmitStatus('idle'), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          first_name: values.first_name,
          last_name: values.last_name,
          from_name: `${values.first_name} ${values.last_name}`,
          reply_to: "no-reply@example.com", // Since we are not collecting email
          subject: `New Contact from ${values.first_name} ${values.last_name}`,
          message: values.message,
          to_email: "afakhreddine717@gmail.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        toast.success("Message sent successfully!");
        setSubmitStatus('success');
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("An error occurred. Please try again later.");
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something."
      description="Open to backend, full-stack, and engineering roles — locally and internationally."
    >
      <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-secondary/20 p-8 shadow-soft sm:p-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column: Info & Links */}
          <div className="flex flex-col justify-between space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Have a project, role, or idea?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                I'm always interested in hearing about new projects and opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {links.map((l) => {
                const Icon = l.icon;
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-border bg-background p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary/50 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
                        {l.label}
                      </div>
                      <div className="truncate text-sm font-medium">{l.value}</div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="rounded-2xl border border-border bg-background/50 p-6 backdrop-blur-sm sm:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me more about your project..."
                          className="min-h-[150px] resize-none bg-background"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full gap-2 rounded-xl py-6 text-base font-semibold shadow-glow transition-all hover:scale-[1.02]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>

                {submitStatus === 'success' && (
                  <div className="mt-4 flex items-center gap-3 rounded-xl bg-green-500/10 p-4 text-sm font-medium text-green-500 border border-green-500/20 animate-in fade-in slide-in-from-top-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span>Message sent successfully!</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 flex items-center gap-3 rounded-xl bg-destructive/10 p-4 text-sm font-medium text-destructive border border-destructive/20 animate-in fade-in slide-in-from-top-2">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <span>Something went wrong. Please try again later.</span>
                  </div>
                )}
              </form>
            </Form>
          </div>
        </div>
      </div>

      <footer className="mt-20 border-t border-border pt-12 pb-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="text-xl font-bold tracking-tight text-foreground">
              {profile.name.split(' ')[0]}<GlowWord color="shift">.</GlowWord>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
              Software Engineer specializing in building exceptional digital experiences.
              Focused on backend excellence and scalable architectures
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Links</h4>
            <ul className="mt-4 space-y-2">
              {["About", "Experience", "Education" ,"Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Social</h4>
            <div className="mt-4 flex gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-secondary p-2 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-secondary p-2 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-secondary p-2 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Ali Fakhreddine. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </Section>
  );
};