const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-divider">
      <div className="section-container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center">
          <span className="text-sm font-extrabold tracking-[0.1em] uppercase">TRICON</span>
          <span className="text-sm font-normal tracking-[0.1em] uppercase ml-1">STUDIOS</span>
        </button>

        <p className="text-sm text-muted-foreground">© 2026 Tricon Studios. All rights reserved.</p>

        <nav className="flex items-center gap-6">
          {["services", "projects", "team", "contact"].map((link) => (
            <button key={link} onClick={() => scrollTo(link)} className="nav-link text-muted-foreground hover:text-foreground transition-colors">
              {link}
            </button>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
