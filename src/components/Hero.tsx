import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const statusMessages = [
  "> SYSTEM_INITIALIZING...",
  "> NEURAL_NETWORKS_ONLINE",
  "> VOICE_AGENTS_ACTIVE",
  "> READY_TO_DEPLOY",
];

const Hero = () => {
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statusMessages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 lg:px-8">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-70" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(350,70%,36%,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-4xl">
          {/* Status bar */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-primary-glow tracking-wider">
              {statusMessages[statusIndex]}
            </span>
          </div>

          {/* Micro-tag - Who we serve */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              For operators & founders scaling with AI
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif leading-[0.9] mb-6">
            <span className="text-gradient block">Intelligence That</span>
            <span className="text-gradient-wine italic block mt-2">Never Sleeps</span>
          </h1>

          {/* Value proposition - focused on outcomes */}
          <p className="text-foreground/90 text-lg lg:text-xl leading-relaxed max-w-2xl mb-4 font-medium">
            We build custom AI systems that run your operations around the clock—so you capture more revenue, reduce costs, and scale without adding headcount.
          </p>

          {/* Secondary description */}
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mb-10">
            Bespoke voice agents and workflow automation for businesses that refuse to settle for templates. 
            Every solution is engineered for production, built for your specific needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("#contact")}
              className="animate-glow-pulse"
            >
              Book Strategy Call
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollToSection("#results")}
            >
              See What We've Built
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
