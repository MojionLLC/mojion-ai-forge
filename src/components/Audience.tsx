import { Check, X } from "lucide-react";

const fitItems = [
  "Operators, founders, or teams scaling real businesses",
  "Want custom AI systems—not templates or chatbots",
  "Care about reliability, security, and ownership",
  "Ready to invest properly in automation that lasts",
  "Need production-ready systems, not demos",
];

const notFitItems = [
  "Looking for cheap or instant AI solutions",
  "Expect AI to fix broken processes automatically",
  "Aren't ready to invest in automation properly",
  "Want off-the-shelf tools repackaged",
  "Need a quick proof-of-concept with no follow-through",
];

const Audience = () => {
  return (
    <section className="py-24 px-6 lg:px-8 border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Clarity
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-gradient mb-4">
            Who MoJion Is (And Isn't) For
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            We're selective about who we work with. This ensures better outcomes for everyone.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - We're a fit */}
          <div className="glass rounded-2xl p-8 lg:p-10 relative overflow-hidden group transition-all duration-500 hover:border-primary/40">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/60 to-emerald-400/40" />
            
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <Check className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-serif text-xl text-foreground">
                We're a fit if you…
              </h3>
            </div>

            <ul className="space-y-4">
              {fitItems.map((item) => (
                <li 
                  key={item}
                  className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed"
                >
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - We're not a fit */}
          <div className="glass rounded-2xl p-8 lg:p-10 relative overflow-hidden group transition-all duration-500 hover:border-primary/40">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 to-primary-glow/40" />
            
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <X className="w-5 h-5 text-primary-glow" />
              </div>
              <h3 className="font-serif text-xl text-foreground">
                We're not a fit if you…
              </h3>
            </div>

            <ul className="space-y-4">
              {notFitItems.map((item) => (
                <li 
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                >
                  <X className="w-4 h-4 text-primary/60 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
