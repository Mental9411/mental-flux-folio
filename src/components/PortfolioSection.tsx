import { useState } from "react";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Fitness Brand Identity",
      category: "Design",
      description: "Complete brand identity for a fitness startup – logo, color palette, social assets, and more.",
      image: "🏋️",
      gradient: "from-primary to-electric-pink",
    },
    {
      title: "Tech Fest Highlight Reel",
      category: "Video",
      description: "3-minute tech fest highlight reel – beat-synced transitions, motion graphics, and dual-format delivery.",
      image: "🎯",
      gradient: "from-electric-pink to-electric-green",
    },
    {
      title: "Fintech Education App",
      category: "UI/UX",
      description: "Fintech education app – gamified, multilingual, accessible, with dark/light mode support.",
      image: "💳",
      gradient: "from-electric-green to-electric-purple",
    },
    {
      title: "E-commerce Security Audit",
      category: "Security",
      description: "Comprehensive security audit and penetration testing for a major e-commerce platform.",
      image: "🛡️",
      gradient: "from-electric-purple to-primary",
    },
    {
      title: "Restaurant Menu App",
      category: "UI/UX",
      description: "Modern restaurant ordering app with seamless UX and beautiful food photography integration.",
      image: "🍽️",
      gradient: "from-primary to-electric-green",
    },
    {
      title: "Corporate Video Series",
      category: "Video",
      description: "Professional corporate video series with motion graphics and consistent branding across 5 episodes.",
      image: "🎥",
      gradient: "from-electric-pink to-electric-purple",
    },
  ];

  const filters = ["All", "Design", "Video", "UI/UX", "Security"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cyber font-bold text-4xl md:text-5xl gradient-text mb-6">
            Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Showcasing creative solutions across design, development, and security
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`font-modern ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground neon-glow"
                    : "border-border text-muted-foreground hover:text-primary hover:border-primary"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group cyber-card p-6 rounded-2xl cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Icon */}
              <div className={`w-full h-32 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center text-4xl mb-6 group-hover:scale-105 transition-transform`}>
                {project.image}
              </div>

              {/* Project Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-cyber font-medium px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white`}>
                    {project.category}
                  </span>
                </div>
                
                <h3 className="font-cyber font-bold text-lg text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* View Project Link */}
                <div className="pt-4">
                  <button className="text-primary hover:text-primary-glow transition-colors font-modern font-medium text-sm">
                    View Project →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;