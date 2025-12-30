import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";

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
          <div className="relative z-10 p-10 lg:p-16">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl lg:text-4xl text-primary-foreground mb-6">
                Let's Talk Strategy
              </h2>
              
              <p className="text-primary-foreground/90 text-base lg:text-lg leading-relaxed mb-8">
                Book a 30-minute call to discuss your automation goals. We'll assess 
                whether AI is the right fit for your situation—and tell you honestly if it isn't.
              </p>

              {/* What to expect */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                <div className="flex items-center justify-center gap-2 text-primary-foreground/80 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>30-minute call</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-primary-foreground/80 text-sm">
                  <MessageCircle className="w-4 h-4" />
                  <span>Honest assessment</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-primary-foreground/80 text-sm">
                  <ArrowRight className="w-4 h-4" />
                  <span>Clear next steps</span>
                </div>
              </div>

              {/* Who this is for */}
              <p className="text-primary-foreground/70 text-sm mb-8">
                Best for: Founders, operators, and teams with real automation challenges 
                who are ready to invest in solutions that work.
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
                  Schedule Strategy Call
                </Button>
              </div>

              {/* No pressure note */}
              <p className="text-primary-foreground/60 text-xs mt-8">
                No pressure. No sales pitch. If we're not the right fit, we'll tell you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
