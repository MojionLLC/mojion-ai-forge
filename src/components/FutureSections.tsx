// Placeholder components for Phase 2 sections
// These are structural placeholders - no fake data

export const ClientLogos = () => {
  return (
    <section className="py-16 px-6 lg:px-8 border-y border-primary/10">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
          Trusted by operators building real businesses
        </p>
        <div className="flex items-center justify-center gap-12 opacity-40">
          {/* Placeholder for client logos */}
          <div className="h-8 w-24 rounded bg-muted/20" />
          <div className="h-8 w-28 rounded bg-muted/20" />
          <div className="h-8 w-20 rounded bg-muted/20" />
          <div className="h-8 w-24 rounded bg-muted/20" />
          <div className="h-8 w-28 rounded bg-muted/20" />
        </div>
        <p className="text-muted-foreground/50 text-xs mt-6">
          Client logos coming soon
        </p>
      </div>
    </section>
  );
};

export const InsightsTeaser = () => {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
          Coming Soon
        </p>
        <h2 className="font-serif text-3xl lg:text-4xl text-gradient mb-6">
          MoJion Labs
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed text-sm mb-8">
          Insights, experiments, and lessons from the front lines of production AI. 
          Case studies, technical deep-dives, and honest takes on what works.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-xs text-muted-foreground">
            Launching Q1 2025
          </span>
        </div>
      </div>
    </section>
  );
};
