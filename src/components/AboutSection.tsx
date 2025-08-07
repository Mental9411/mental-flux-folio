const AboutSection = () => {
  const skills = [
    { name: "Adobe Creative Suite", icon: "🎨" },
    { name: "React.js", icon: "⚛️" },
    { name: "Video Editing", icon: "🎬" },
    { name: "Cybersecurity", icon: "🔒" },
    { name: "UI/UX Design", icon: "✨" },
    { name: "Ethical Hacking", icon: "🛡️" },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cyber font-bold text-4xl md:text-5xl gradient-text mb-6">
            About Mental
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A creative multitasker blending art and tech
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <div className="cyber-card p-8 rounded-2xl">
              <h3 className="font-cyber font-bold text-2xl text-primary mb-4">
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Hi, I'm Mental — a creative multitasker blending art and tech. I'm a 
                <span className="text-primary"> Graphic Designer</span>, 
                <span className="text-electric-pink"> Videographer</span>, and 
                <span className="text-electric-green"> Video Editor</span> with a passion for visual storytelling.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I also wear the hats of an <span className="text-electric-purple">Ethical Hacker</span> and 
                <span className="text-primary"> Coder</span>, bridging the gap between creativity and cybersecurity.
              </p>
            </div>

            {/* Education & Experience */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="cyber-card p-6 rounded-xl">
                <h4 className="font-cyber font-semibold text-lg text-electric-pink mb-2">
                  Education
                </h4>
                <p className="text-muted-foreground text-sm">
                  B.Tech in Computer Science & Engineering
                </p>
              </div>
              <div className="cyber-card p-6 rounded-xl">
                <h4 className="font-cyber font-semibold text-lg text-electric-green mb-2">
                  Experience
                </h4>
                <p className="text-muted-foreground text-sm">
                  3+ years as Freelance Designer & Coder
                </p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-6">
            <h3 className="font-cyber font-bold text-2xl text-center mb-8">
              Tech Stack & Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="cyber-card p-4 rounded-xl text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl mb-2">{skill.icon}</div>
                  <p className="font-modern font-medium text-sm text-card-foreground">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;