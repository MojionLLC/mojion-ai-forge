import { Shield, Lock, Users, Scale } from "lucide-react";

const principles = [
  {
    icon: Lock,
    title: "Security-First Architecture",
    description:
      "Encryption at rest and in transit. Your data never touches third-party servers without explicit consent. We build systems with the same security paranoia we'd want for our own business.",
  },
  {
    icon: Users,
    title: "Client Ownership",
    description:
      "You own your systems, your data, and your intellectual property. No vendor lock-in, no surprise licensing changes. When we build it, it's yours.",
  },
  {
    icon: Shield,
    title: "Production-Grade Reliability",
    description:
      "We build for the long term, not the demo. Every system is stress-tested, monitored, and maintained to run reliably at scale—because downtime costs more than development.",
  },
  {
    icon: Scale,
    title: "Ethical Deployment",
    description:
      "We refuse projects that involve deception, manipulation, or misuse of AI. Our reputation is built on doing work we're proud of, for clients we believe in.",
  },
];

const ResponsibleAI = () => {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Our Commitment
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-gradient mb-6">
            Responsible AI, Built for Production
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm">
            We take AI seriously. Not as a buzzword to chase, but as a tool that 
            carries real responsibility. Here's how we approach it.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <div 
              key={principle.title}
              className="glass rounded-xl p-8 group transition-all duration-500 hover:border-primary/40"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <principle.icon className="w-5 h-5 text-primary-glow" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/20 bg-primary/5">
            <Shield className="w-4 h-4 text-primary-glow" />
            <span className="text-xs font-mono text-muted-foreground">
              GDPR • CCPA • HIPAA-Ready • Technology E&O Insured
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsibleAI;
