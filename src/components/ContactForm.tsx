import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, company, message } = formData;
    
    const subject = encodeURIComponent(`New Lead from ${name} - ${company}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`
    );
    
    window.location.href = `mailto:MoJionvoice@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client",
      description: "Your default email app will open with the message pre-filled.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact-form" className="py-24 px-6 relative">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-wine font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
            Start The Conversation
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Tell us about your automation challenges. We'll respond within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-muted-foreground font-mono">
                Name *
              </label>
              <Input
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="bg-dark/50 border-wine/20 focus:border-wine text-cream placeholder:text-muted-foreground/50"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-muted-foreground font-mono">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="bg-dark/50 border-wine/20 focus:border-wine text-cream placeholder:text-muted-foreground/50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="text-sm text-muted-foreground font-mono">
              Company
            </label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company name"
              className="bg-dark/50 border-wine/20 focus:border-wine text-cream placeholder:text-muted-foreground/50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm text-muted-foreground font-mono">
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your automation needs..."
              rows={5}
              className="bg-dark/50 border-wine/20 focus:border-wine text-cream placeholder:text-muted-foreground/50 resize-none"
            />
          </div>

          <Button
            type="submit"
            variant="wine"
            size="lg"
            className="w-full group"
          >
            Send Message
            <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
