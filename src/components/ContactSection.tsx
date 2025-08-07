import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "manishbassanpul9411@gmail.com",
      href: "mailto:manishbassanpul9411@gmail.com",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+91 9814767766",
      href: "tel:+919814767766",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Available Worldwide",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: "💼", label: "LinkedIn", href: "#" },
    { icon: "📷", label: "Instagram", href: "#" },
    { icon: "💻", label: "GitHub", href: "#" },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cyber font-bold text-4xl md:text-5xl gradient-text mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="cyber-card p-8 rounded-2xl">
            <h3 className="font-cyber font-bold text-2xl text-card-foreground mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-input border-border focus:border-primary"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-input border-border focus:border-primary"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-input border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-medium neon-glow"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="cyber-card p-6 rounded-xl flex items-center space-x-4 hover:bg-card-hover transition-all group"
                >
                  <div className="text-2xl">{info.icon}</div>
                  <div>
                    <h4 className="font-cyber font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {info.label}
                    </h4>
                    <p className="text-muted-foreground text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="cyber-card p-6 rounded-xl">
              <h4 className="font-cyber font-semibold text-lg text-card-foreground mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-gradient-to-r from-primary to-electric-pink rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="cyber-card p-6 rounded-xl">
              <h4 className="font-cyber font-semibold text-lg text-card-foreground mb-2">
                Currently Available
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Open for freelance projects and full-time opportunities
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-electric-green rounded-full glow-pulse"></div>
                <span className="text-sm text-electric-green font-medium">
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;