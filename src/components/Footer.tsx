const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="font-cyber font-bold text-2xl gradient-text mb-2">
              mental.
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 Mental. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            {quickLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-modern"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all"
          >
            <span className="text-sm font-modern">Back to top</span>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:bg-primary-glow transition-colors">
              <span className="text-primary-foreground text-sm">↑</span>
            </div>
          </button>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            Crafted with passion using React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;