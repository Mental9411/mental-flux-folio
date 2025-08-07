import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="font-cyber font-bold text-2xl gradient-text cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            mental.
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-muted-foreground hover:text-primary transition-colors font-modern font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            variant="default" 
            className="bg-primary hover:bg-primary-glow text-primary-foreground font-medium neon-glow"
            onClick={() => scrollToSection("contact")}
          >
            LET'S TALK
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;