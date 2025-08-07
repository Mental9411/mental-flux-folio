import { Button } from "@/components/ui/button";
import SkillCard from "./SkillCard";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50"></div>
      
      {/* Floating Skill Cards */}
      <SkillCard
        title="Graphic Designer"
        icon="🎨"
        position={{ top: "20%", right: "15%" }}
        delay="0.5s"
      />
      <SkillCard
        title="Video Editor"
        icon="🎬"
        position={{ top: "60%", right: "10%" }}
        delay="1s"
      />
      <SkillCard
        title="Web Developer"
        icon="💻"
        position={{ bottom: "25%", left: "10%" }}
        delay="1.5s"
      />
      <SkillCard
        title="Ethical Hacker"
        icon="🔒"
        position={{ top: "30%", left: "15%" }}
        delay="2s"
      />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Greeting & Name */}
        <div className="mb-6">
          <p className="text-lg font-modern text-muted-foreground mb-2">
            Hello, I'm
          </p>
          <h1 className="font-cyber font-black text-6xl md:text-8xl gradient-text mb-4">
            MENTAL
          </h1>
          <p className="text-xl md:text-2xl font-modern text-foreground mb-2">
            Blending <span className="text-primary">Art</span> & <span className="text-electric-pink">Tech</span>
          </p>
          <p className="text-lg font-modern text-muted-foreground">
            Graphic Designer • Video Editor • Ethical Hacker
          </p>
        </div>

        {/* Bio */}
        <p className="text-lg font-modern text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Mental is a creative multitasker blending the worlds of art and technology. 
          With over 3 years of freelance experience, he excels at delivering visually 
          compelling and technically secure solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => scrollToSection("portfolio")}
            className="bg-primary hover:bg-primary-glow text-primary-foreground font-medium px-8 py-3 neon-glow"
          >
            View My Work
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
          >
            Contact Me
          </Button>
        </div>

        {/* Contact Info */}
        <div className="mt-16 flex items-center justify-center space-x-6">
          <a
            href="mailto:manishbassanpul9411@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            manishbassanpul9411@gmail.com
          </a>
          <div className="flex items-center space-x-4">
            <a
              href="mailto:manishbassanpul9411@gmail.com"
              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary-glow transition-all"
            >
              ✉
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-foreground hover:bg-card-hover transition-all"
            >
              🌐
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-foreground hover:bg-card-hover transition-all"
            >
              📧
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;