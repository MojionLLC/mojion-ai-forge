const values = [
  {
    icon: "⚖️",
    title: "Integrity",
    description:
      "We refuse projects that compromise ethical standards. Your data is never shared, sold, or used beyond our explicit agreement. Full GDPR & CCPA compliance, always.",
  },
  {
    icon: "🚀",
    title: "Innovation",
    description:
      "We treat every build like a custom car—meticulously tuned, perfectly optimized. Templates don't exist in our world. Your solution is uniquely yours.",
  },
  {
    icon: "🤝",
    title: "Partnership",
    description:
      "We embed ourselves in your workflow, interview stakeholders, and iterate until it's perfect. You're not buying software—you're gaining a technical co-pilot.",
  },
  {
    icon: "🔒",
    title: "Security",
    description:
      "Encryption at rest and in transit. SOC 2 compliant infrastructure. Technology E&O insurance. We treat your data with the same paranoia we'd want for our own.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Our Foundation
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-gradient mb-6">
            Built on Trust & Ethics
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded in July 2024 by engineers who turned their passion for AI into 
            a professional agency. We're not just developers—we're partners committed 
            to responsible, transparent AI implementation.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <article
              key={value.title}
              className="glass rounded-xl p-6 group transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-[0_20px_40px_hsla(350,70%,36%,0.2)] relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-glow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <span className="text-4xl block mb-4">{value.icon}</span>

              <h3 className="font-serif text-xl text-gradient-wine mb-3">
                {value.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
