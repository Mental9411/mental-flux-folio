const SkillsSection = () => {
  const skills = [
    {
      name: "Adobe Photoshop",
      icon: "🎨",
      level: "Expert",
      description: "Advanced photo manipulation, digital art, and graphic design",
      gradient: "from-primary to-electric-pink",
    },
    {
      name: "Premiere Pro",
      icon: "🎬",
      level: "Expert", 
      description: "Professional video editing, color grading, and post-production",
      gradient: "from-electric-pink to-electric-green",
    },
    {
      name: "After Effects",
      icon: "✨",
      level: "Advanced",
      description: "Motion graphics, visual effects, and animation",
      gradient: "from-electric-green to-electric-purple",
    },
    {
      name: "ReactJS",
      icon: "⚛️",
      level: "Expert",
      description: "Modern web development with component-based architecture",
      gradient: "from-electric-purple to-primary",
    },
    {
      name: "Ethical Hacking",
      icon: "🔒",
      level: "Advanced",
      description: "Cybersecurity, penetration testing, and security audits",
      gradient: "from-primary to-electric-pink",
    },
    {
      name: "Cybersecurity",
      icon: "🛡️",
      level: "Expert",
      description: "Security-first development and digital protection strategies",
      gradient: "from-electric-pink to-electric-green",
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cyber font-bold text-4xl md:text-5xl gradient-text mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A powerful fusion of creative vision and technical mastery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group cyber-card p-6 rounded-2xl cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Level */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${skill.gradient} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                    {skill.icon}
                  </div>
                  <span className={`text-xs font-cyber font-medium px-3 py-1 rounded-full bg-gradient-to-r ${skill.gradient} text-white`}>
                    {skill.level}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="font-cyber font-bold text-xl text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>

                {/* Skill Bar */}
                <div className="mt-6">
                  <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full transition-all duration-1000 delay-300 group-hover:animate-pulse`}
                      style={{ 
                        width: skill.level === "Expert" ? "95%" : "85%",
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className={`mt-4 h-1 bg-gradient-to-r ${skill.gradient} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;