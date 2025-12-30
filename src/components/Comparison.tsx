import { Check, X } from "lucide-react";

const comparisonItems = [
  {
    aspect: "System Design",
    generic: "One-size-fits-all templates",
    custom: "Engineered for your specific workflows",
  },
  {
    aspect: "Reliability",
    generic: "Works in demos, breaks in production",
    custom: "Battle-tested for real-world conditions",
  },
  {
    aspect: "Ownership",
    generic: "Locked into vendor platforms",
    custom: "You own your systems and data",
  },
  {
    aspect: "Integration",
    generic: "Limited to pre-built connectors",
    custom: "Connects to any system via custom APIs",
  },
  {
    aspect: "Support",
    generic: "Ticket queues and documentation",
    custom: "Direct access to the team that built it",
  },
  {
    aspect: "Evolution",
    generic: "Wait for vendor roadmap updates",
    custom: "Continuous improvement based on your needs",
  },
];

const Comparison = () => {
  return (
    <section className="py-24 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            The Difference
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-gradient mb-6">
            Why Custom AI Beats Off-the-Shelf
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm">
            Generic tools get you started. Custom systems get you ahead. 
            Here's what separates production-ready AI from plug-and-play demos.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="glass rounded-2xl overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-3 gap-4 p-6 border-b border-primary/10 bg-background/50">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Aspect
            </div>
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground text-center">
              Generic AI Tools
            </div>
            <div className="font-mono text-xs uppercase tracking-wider text-primary-glow text-center">
              MoJion Custom Build
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisonItems.map((item, index) => (
            <div 
              key={item.aspect}
              className={`grid grid-cols-3 gap-4 p-6 items-center transition-colors hover:bg-primary/5 ${
                index !== comparisonItems.length - 1 ? 'border-b border-primary/10' : ''
              }`}
            >
              <div className="font-medium text-foreground text-sm">
                {item.aspect}
              </div>
              <div className="flex items-center justify-center gap-2 text-center">
                <X className="w-4 h-4 text-muted-foreground/50 flex-shrink-0" />
                <span className="text-muted-foreground text-xs leading-tight">
                  {item.generic}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 text-center">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-foreground/90 text-xs leading-tight">
                  {item.custom}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-muted-foreground text-xs mt-8 max-w-xl mx-auto leading-relaxed">
          We build systems you own, understand, and can rely on for years—not 
          subscriptions that lock you in and limit what's possible.
        </p>
      </div>
    </section>
  );
};

export default Comparison;
