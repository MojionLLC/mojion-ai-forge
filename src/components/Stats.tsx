import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10000, suffix: "+", label: "Calls Automated Monthly" },
  { value: 99.9, suffix: "%", label: "System Uptime" },
  { value: 40, suffix: "%", label: "Average Cost Reduction" },
  { value: 2, prefix: "<", suffix: "s", label: "Average Response Time" },
];

const useCountUp = (end: number, duration: number = 2000, shouldStart: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end * 10) / 10);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
};

const StatCard = ({ 
  value, 
  prefix, 
  suffix, 
  label, 
  isVisible 
}: { 
  value: number; 
  prefix?: string; 
  suffix?: string; 
  label: string; 
  isVisible: boolean;
}) => {
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div className="glass glass-hover rounded-lg p-8 text-center transition-all duration-500">
      <div className="font-serif text-4xl lg:text-5xl text-gradient-wine mb-2">
        {prefix}
        {value === 99.9 ? count.toFixed(1) : Math.floor(count)}
        {suffix}
      </div>
      <div className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 px-6 lg:px-8 bg-secondary/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
            >
              <StatCard {...stat} isVisible={isVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
