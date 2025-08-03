import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Code, 
  Smartphone, 
  Video, 
  Share2, 
  Film, 
  Settings, 
  Lightbulb,
  Globe,
  Zap,
  GraduationCap,
  Leaf,
  Building
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Modern branding, social media, and print design solutions.",
    },
    {
      icon: Code,
      title: "Web & App Development",
      description: "Custom websites and mobile applications built with cutting-edge technology.",
    },
    {
      icon: Settings,
      title: "Tech Support & Computer Maintenance",
      description: "Reliable technical support and comprehensive computer repair services.",
    },
    {
      icon: Video,
      title: "Motion Graphics & Video Editing",
      description: "Professional video production and stunning motion graphics.",
    },
    {
      icon: Share2,
      title: "Content Creation & Social Media Management",
      description: "Engaging content and strategic social media marketing.",
    },
    {
      icon: Lightbulb,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive digital experiences.",
    },
    {
      icon: Building,
      title: "Branding Consultancy",
      description: "Strategic brand development and identity consulting.",
    },
    {
      icon: Globe,
      title: "Digital Strategy & SEO",
      description: "Comprehensive digital strategies that drive growth and visibility.",
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 mb-6 bg-gradient-tech rounded-full border border-border shadow-card">
              <span className="text-sm font-medium text-foreground">🚀 What We Do Best</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="text-foreground">What We Do </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Best</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-sans">
              Comprehensive digital services that transform your vision into reality with modern technology and creative excellence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-gradient-card p-8 rounded-3xl border border-border shadow-card hover:shadow-hover transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                  {service.description}
                </p>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-primary rounded-3xl p-12 shadow-glow">
            <h3 className="text-3xl font-display font-bold text-primary-foreground mb-4">
              Ready to elevate your brand?
            </h3>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-sans">
              Let's work together to bring your vision to life with cutting-edge technology and creative excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-zedo-blue hover:bg-white/90">
                Contact Us
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Book a Free Session
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;