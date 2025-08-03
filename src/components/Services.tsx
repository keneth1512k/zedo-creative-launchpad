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
      description: "Logos, posters, and brand identity that make your business stand out.",
      features: ["Logo Design", "Brand Identity", "Posters", "Visual Branding"]
    },
    {
      icon: Code,
      title: "Website & System Development",
      description: "Modern, responsive websites and robust systems built with cutting-edge technology.",
      features: ["Custom Websites", "Web Applications", "System Development", "E-commerce Solutions"]
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications for Android and iOS.",
      features: ["Android Apps", "iOS Apps", "Cross-platform", "Mobile Solutions"]
    },
    {
      icon: Lightbulb,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging digital experiences.",
      features: ["User Interface Design", "User Experience", "Prototyping", "Design Systems"]
    },
    {
      icon: Settings,
      title: "Computer Repair & Technical Support",
      description: "Reliable computer repair services and comprehensive IT support solutions.",
      features: ["Hardware Repair", "Software Troubleshooting", "System Maintenance", "Technical Support"]
    },
    {
      icon: Share2,
      title: "Social Media Marketing & Digital Strategy",
      description: "Comprehensive digital marketing strategies that drive engagement and growth.",
      features: ["Social Media Management", "Digital Marketing", "Content Strategy", "Online Campaigns"]
    },
    {
      icon: Video,
      title: "Photography & Videography",
      description: "Professional photography and videography services for all your visual needs.",
      features: ["Commercial Photography", "Event Photography", "Video Production", "Creative Content"]
    },
    {
      icon: Film,
      title: "Content Creation",
      description: "Educational and promotional content that informs, engages, and converts.",
      features: ["Educational Content", "Promotional Materials", "Content Writing", "Visual Content"]
    },
    {
      icon: Zap,
      title: "IT Consultation",
      description: "Strategic technology consulting and digital transformation guidance.",
      features: ["Technology Strategy", "Digital Transformation", "IT Planning", "System Optimization"]
    },
    {
      icon: Film,
      title: "Film Production & Editing",
      description: "Complete film production services from concept to final cut.",
      features: ["Film Production", "Video Editing", "Post-Production", "Creative Direction"]
    },
    {
      icon: Globe,
      title: "Hosting and Domain Registration",
      description: "Secure web hosting solutions and domain management services.",
      features: ["Web Hosting", "Domain Registration", "SSL Certificates", "Server Management"]
    },
    {
      icon: GraduationCap,
      title: "E-learning Content & Platforms",
      description: "Custom e-learning solutions and educational platform development.",
      features: ["Learning Platforms", "Educational Content", "Online Courses", "Training Systems"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 mb-6 bg-gradient-card rounded-full border border-border shadow-card">
              <span className="text-sm font-medium text-foreground">🎯 Comprehensive Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Our </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From creative design to technical development, we offer a complete suite of digital services 
              to help your business thrive in the modern landscape.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-gradient-card p-6 rounded-3xl border border-border shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-primary">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-primary rounded-3xl p-12 shadow-primary">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our comprehensive digital services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;