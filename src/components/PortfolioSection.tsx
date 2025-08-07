import { useState } from "react";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Fitness Startup Brand Identity",
      category: "Design",
      description: "Complete brand identity package including logos, color palette, social media assets, and comprehensive branding guidelines.",
      image: "🏋️",
      gradient: "from-primary to-electric-pink",
      features: ["Logo Design", "Social Assets", "Brand Guidelines", "Color Palette"]
    },
    {
      title: "University Tech Fest Highlight Reel",
      category: "Video",
      description: "3-minute highlight reel with beat-synced transitions, motion graphics, and dual-format delivery for social platforms.",
      image: "🎯",
      gradient: "from-electric-pink to-electric-green",
      features: ["Motion Graphics", "Beat Sync", "Color Grading", "Multi-format Export"]
    },
    {
      title: "Gamified Financial Literacy App",
      category: "UI/UX",
      description: "Mobile app UI/UX design featuring gamification, multilingual support, accessibility features, and dark/light mode.",
      image: "💳",
      gradient: "from-electric-green to-electric-purple",
      features: ["Mobile UI/UX", "Gamification", "Dark/Light Mode", "Accessibility"]
    },
  ];

  const filters = ["All", "Design", "Video", "UI/UX"];

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
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

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