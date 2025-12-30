const steps = [
  {
    number: "01",
    title: "Discovery & Scoping",
    timeframe: "Week 1",
    description:
      "We map your workflows, interview key stakeholders, and identify the highest-leverage automation opportunities. No sales pitch—just honest assessment.",
    deliverables: [
      "Workflow audit document",
      "Opportunity assessment report", 
      "Go/no-go recommendation",
    ],
  },
  {
    number: "02",
    title: "Design & Prototype",
    timeframe: "Weeks 2-3",
    description:
      "We build a working prototype that demonstrates the solution in action. You see exactly how it works before we commit to full development.",
    deliverables: [
      "Functional prototype demo",
      "Technical architecture plan",
      "Integration requirements spec",
    ],
  },
  {
    number: "03",
    title: "Development & Integration",
    timeframe: "Weeks 4-6",
    description:
      "Full build-out with regular check-ins. We integrate with your existing systems, test rigorously, and prepare for production deployment.",
    deliverables: [
      "Production-ready system",
      "API integrations complete",
      "Staging environment for testing",
    ],
  },
  {
    number: "04",
    title: "Launch & Optimization",
    timeframe: "Weeks 7-8",
    description:
      "Two-week live monitoring period. We track performance, fine-tune based on real usage, and ensure everything runs smoothly at scale.",
    deliverables: [
      "Live production deployment",
      "Performance monitoring dashboard",
      "Optimization adjustments",
    ],
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            How We Work
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-gradient mb-6">
            From Discovery to Deployment
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A proven 8-week process that takes you from initial conversation to 
            live, production-ready AI systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-primary transform lg:-translate-x-1/2" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col lg:flex-row gap-6 lg:gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Number bubble */}
                <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 -translate-y-1 z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center font-serif text-lg text-primary-foreground shadow-[0_0_30px_hsla(350,70%,36%,0.5)]">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 pl-20 lg:pl-0 ${
                    index % 2 === 0 ? "lg:text-right lg:pr-24" : "lg:text-left lg:pl-24"
                  }`}
                >
                  <div className="glass rounded-xl p-6 inline-block text-left transition-all duration-500 hover:border-primary hover:shadow-[0_20px_40px_hsla(350,70%,36%,0.15)]">
                    {/* Timeframe badge */}
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary-glow mb-3">
                      {step.timeframe}
                    </div>
                    
                    <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-md">
                      {step.description}
                    </p>
                    
                    {/* Deliverables */}
                    <div className="pt-4 border-t border-primary/10">
                      <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                        Deliverables:
                      </p>
                      <ul className="space-y-1">
                        {step.deliverables.map((deliverable) => (
                          <li key={deliverable} className="text-xs text-foreground/80 flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary-glow" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground text-sm">
            Timeline varies based on complexity. We'll provide accurate estimates after Discovery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
