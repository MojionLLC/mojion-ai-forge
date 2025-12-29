const services = [
  {
    title: "AI Voice Agents",
    description:
      "Conversational AI that handles complex customer interactions with human-like understanding. Perfect for appointment booking, customer support, lead qualification, and sales calls.",
    features: [
      "24/7 Inbound & Outbound Calling",
      "Natural Language Processing",
      "Multi-Language Support",
      "CRM Integration (Salesforce, HubSpot, Custom)",
      "Real-Time Analytics Dashboard",
    ],
  },
  {
    title: "Workflow Automation",
    description:
      "Eliminate manual tasks with intelligent workflow systems that connect your entire tech stack. From data entry to complex multi-step processes—automated end-to-end.",
    features: [
      "n8n Workflow Engineering",
      "API Integration & Custom Connectors",
      "Data Pipeline Automation",
      "Document Processing & OCR",
      "Slack/Teams Bot Integration",
    ],
  },
  {
    title: "Custom AI Solutions",
    description:
      "Industry-specific models fine-tuned for your unique requirements. We handle everything from data preparation to deployment, ensuring compliance with GDPR, CCPA, and sector regulations.",
    features: [
      "Custom LLM Fine-Tuning",
      "Domain-Specific Training",
      "Compliance-First Design",
      "Proprietary Data Security",
      "Continuous Model Improvement",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Core Capabilities
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-gradient mb-6">
            What We Build
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Built on battle-tested platforms like Vapi and n8n, engineered for 
            scale, designed for your specific needs.
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

              <h3 className="font-serif text-2xl text-gradient-wine mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-foreground text-sm flex items-start gap-3 pb-3 border-b border-primary/10 last:border-0 last:pb-0"
                  >
                    <span className="text-primary-glow font-bold">▹</span>
                    {feature}
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
