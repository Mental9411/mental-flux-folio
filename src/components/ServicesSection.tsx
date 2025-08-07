const ServicesSection = () => {
  const services = [
    {
      title: "Web Design",
      icon: "🌐",
      description: "Modern, responsive, user-focused websites built with ReactJS and security-first principles.",
      gradient: "from-primary to-electric-pink",
    },
    {
      title: "Video Editing",
      icon: "🎬",
      description: "Cinematic, story-driven edits tailored for YouTube, Instagram, or corporate reels.",
      gradient: "from-electric-pink to-electric-green",
    },
    {
      title: "Graphic Design",
      icon: "🎨",
      description: "Visual brand identity, logos, and creative assets that tell your story with impact.",
      gradient: "from-electric-green to-electric-purple",
    },
    {
      title: "Cybersecurity",
      icon: "🔒",
      description: "Ethical hacking, security audits, and protective measures for your digital assets.",
      gradient: "from-electric-purple to-primary",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cyber font-bold text-4xl md:text-5xl gradient-text mb-6">
            Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions across design, development, and security
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group cyber-card p-6 rounded-2xl h-full cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon with Gradient Background */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>

              {/* Service Info */}
              <h3 className="font-cyber font-bold text-xl text-card-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Line */}
              <div className={`mt-6 h-1 bg-gradient-to-r ${service.gradient} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;