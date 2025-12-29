import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-[hsl(330,80%,45%)]" />
          
          {/* Animated overlay */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.3), transparent 50%)`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-10 lg:p-16 text-center">
            <h2 className="font-serif text-3xl lg:text-4xl text-primary-foreground mb-6">
              Ready to Deploy?
            </h2>
            
            <p className="text-primary-foreground/90 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Book a free 30-minute consultation. We'll analyze your workflows, 
              identify automation opportunities, and provide an honest assessment—even 
              if AI isn't the right solution yet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:MoJionvoice@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary font-mono uppercase tracking-[0.15em] text-xs px-8 py-4 rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                MoJionvoice@gmail.com
              </a>
              <Button
                variant="heroOutline"
                size="xl"
                className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Schedule Demo Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
