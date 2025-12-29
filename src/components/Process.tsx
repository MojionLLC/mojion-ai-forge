const steps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description:
      "We embed ourselves in your workflows, interview stakeholders, and identify high-impact automation opportunities. No sales pitch—just honest assessment.",
  },
  {
    number: "02",
    title: "Demo & Data Collection",
    description:
      "We build a working prototype to validate the approach. Upon approval, we securely collect API keys and system access with full NDAs in place.",
  },
  {
    number: "03",
    title: "Development & Testing",
    description:
      "Regular check-ins ensure the solution evolves exactly as intended. We test rigorously in staging environments before any production deployment.",
  },
  {
    number: "04",
    title: "Live Deployment & Monitoring",
    description:
      "A 2-week live testing period (extendable if needed) ensures stability and performance. We monitor 24/7 and iterate based on real-world usage.",
  },
  {
    number: "05",
    title: "Ongoing Support",
    description:
      "Choose monthly retainer (continuous improvement + hosting) or full buyout (you own everything). Either way, we're available when you need us.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Our Methodology
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-gradient mb-6">
            Our Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From first call to live deployment—transparent, collaborative, and 
            designed for success.
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
                    <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
