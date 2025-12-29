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
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-60" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(350,70%,36%,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-4xl">
          {/* Status bar */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="font-mono text-xs text-primary-glow tracking-wider">
              {statusMessages[statusIndex]}
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif leading-[0.9] mb-8">
            <span className="text-gradient block">Intelligence That</span>
            <span className="text-gradient-wine italic block mt-2">Never Sleeps</span>
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl mb-10">
            We build bespoke AI voice agents and workflow automations for businesses 
            that refuse to settle for templates. Founded by engineers who see AI 
            development as an art form—every solution custom-crafted for maximum impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("#contact")}
            >
              Schedule Consultation
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollToSection("#results")}
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
