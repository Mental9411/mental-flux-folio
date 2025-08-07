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
                About Mental
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Mental is a creative multitasker blending the worlds of art and technology. With over 3 years of freelance experience in graphic design, video editing, web development, and ethical hacking, he excels at delivering visually compelling and technically secure solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Skilled in tools like Adobe Photoshop, Premiere Pro, After Effects, ReactJS, and cybersecurity practices, he offers a powerful mix of creative vision and coding expertise. His work showcases a deep passion for visual storytelling, user experience, and digital safety.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The unique fusion of <span className="text-electric-pink">creativity</span> and <span className="text-electric-green">cybersecurity</span> sets Mental apart in delivering solutions that are both beautiful and secure.
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