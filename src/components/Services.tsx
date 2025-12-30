const services = [
  {
    title: "Always-On Revenue & Support",
    outcome: "Capture every opportunity, 24/7",
    description:
      "Your phones are answered, leads are qualified, and customers are helped—around the clock—without adding headcount. AI voice agents that sound human and never take a day off.",
    capabilities: [
      "Inbound call handling & appointment scheduling",
      "Lead qualification & routing",
      "Customer support & FAQ resolution",
      "After-hours coverage & overflow handling",
    ],
  },
  {
    title: "Operational Automation at Scale",
    outcome: "Eliminate repetitive work across your entire stack",
    description:
      "Connect your tools, automate your workflows, and free your team from manual data entry. We build systems that handle the work your team shouldn't have to.",
    capabilities: [
      "End-to-end workflow automation",
      "Cross-platform data synchronization",
      "Document processing & extraction",
      "Automated reporting & notifications",
    ],
  },
  {
    title: "Custom AI Agents & Systems",
    outcome: "Purpose-built intelligence for your specific challenges",
    description:
      "When off-the-shelf won't cut it, we design and deploy AI systems tailored to your industry, data, and processes. Full ownership, full compliance, built to last.",
    capabilities: [
      "Custom-trained models on your data",
      "Industry-specific AI applications",
      "GDPR/CCPA/HIPAA-ready infrastructure",
      "Long-term maintenance & improvement",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4 animate-fade-in-up">
            What We Deliver
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-gradient mb-6 animate-fade-in-up">
            Outcomes, Not Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We don't sell tools. We deliver measurable business results through 
            custom AI systems designed for your operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="glass rounded-xl p-8 group transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-[0_20px_40px_hsla(350,70%,36%,0.2)] relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-glow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Outcome badge */}
              <div className="text-xs font-mono uppercase tracking-wider text-primary-glow mb-4">
                {service.outcome}
              </div>

              <h3 className="font-serif text-2xl text-foreground mb-4 leading-tight">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="text-foreground/80 text-sm flex items-start gap-3 pb-3 border-b border-primary/10 last:border-0 last:pb-0"
                  >
                    <span className="text-primary-glow font-bold">▹</span>
                    {capability}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
