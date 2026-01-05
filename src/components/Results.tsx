const caseStudies = [
  {
    tag: "Moving Service",
    title: "Receptionist Front for Multi State Business",
    description:
      "Automated over 5,000 monthly calls doing appointment bookings, customer support, pre estimates, and final closing for confirmation across a variety of locations.",
    result: "92% Booking Accuracy",
    details:
      "Reduced front desk workload by 60 hours/week. Eliminated double bookings. HIPAA compliant infrastructure.",
  },
  {
    tag: "Real Estate",
    title: "Lead Qualification & Follow Up System",
    description:
      "Designated outbound calling system polishing off customers bookings and a niche lead generator alongside a lead analyzer qualifying the results.",
    result: "3x Lead Conversion",
    details:
      "Representatives only speak with pre qualified, interested buyers. Increased close rates by 45%.",
  },
  {
    tag: "E Commerce",
    title: "Order Processing & Customer Support",
    description:
      "End to end automation from order intake through fulfillment tracking, plus AI chat support for common inquiries.",
    result: "$50K/mo Saved",
    details:
      "Eliminated need for 3 full time support reps. 24/7 availability increased customer satisfaction by 38%.",
  },
];

const Results = () => {
  return (
    <section id="results" className="py-24 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Proven Results
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-gradient mb-6">
            Real Solutions. Real Impact.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Case studies from real clients who transformed their operations with 
            our AI solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <article
              key={study.title}
              className="glass rounded-xl p-8 group transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-[0_20px_40px_hsla(350,70%,36%,0.2)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Tag */}
              <span className="inline-block bg-primary text-primary-foreground px-4 py-1 text-[0.65rem] font-mono uppercase tracking-[0.1em] rounded mb-6">
                {study.tag}
              </span>

              <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-4 leading-tight">
                {study.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {study.description}
              </p>

              {/* Result highlight */}
              <div className="font-serif text-3xl text-gradient-wine mb-4">
                {study.result}
              </div>

              <p className="text-muted-foreground text-xs leading-relaxed">
                {study.details}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
