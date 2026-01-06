import mojionLogo from "@/assets/mojion-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/20 py-12 px-6 lg:px-8 bg-background/80">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-4 mb-6">
            <img src={mojionLogo} alt="MoJion Logo" className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <span className="font-display text-lg tracking-[0.2em] text-foreground">
                MoJion
              </span>
              <span className="font-mono text-[0.65rem] text-muted-foreground tracking-wider">
                Autonomous AI Infrastructure
              </span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm max-w-md mb-6">
            All AI solutions built with transparency, security, and ethical responsibility.
          </p>

          <div className="border-t border-primary/10 pt-6 w-full max-w-md">
            <p className="text-muted-foreground text-xs mb-2">
              © {currentYear} MOJION LLC · Founded July 2024 · Status: Online
            </p>
            <p className="text-xs">
              Contact:{" "}
              <a
                href="mailto:MoJionvoice@gmail.com"
                className="text-primary hover:text-primary-glow transition-colors"
              >
                MoJionvoice@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
