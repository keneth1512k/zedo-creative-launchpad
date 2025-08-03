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
      description: "Stunning posters, branding, logos, and packaging that captivate your audience.",
      features: ["Logo Design", "Brand Identity", "Print Materials", "Packaging Design"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites built with React, Node.js, and cutting-edge technologies.",
      features: ["React Applications", "Full-stack Development", "E-commerce Sites", "Web Applications"]
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications for Android and iOS.",
      features: ["Native iOS/Android", "Cross-platform", "UI/UX Design", "App Store Optimization"]
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing and content creation for all your marketing needs.",
      features: ["Video Production", "Motion Graphics", "Color Grading", "Audio Enhancement"]
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Comprehensive social media strategy, content creation, and community management.",
      features: ["Content Strategy", "Social Media Ads", "Community Management", "Analytics & Reporting"]
    },
    {
      icon: Film,
      title: "Film Production",
      description: "Creative storytelling through professional film production and cinematography.",
      features: ["Script Writing", "Cinematography", "Post-Production", "Creative Direction"]
    },
    {
      icon: Settings,
      title: "IT Support",
      description: "Reliable computer repair services and comprehensive IT support solutions.",
      features: ["Hardware Repair", "Software Solutions", "Network Setup", "Technical Support"]
    },
    {
      icon: Lightbulb,
      title: "Tech Consultations",
      description: "Strategic technology consulting and digital transformation guidance.",
      features: ["Digital Strategy", "Technology Audits", "Process Optimization", "Innovation Consulting"]
    },
    {
      icon: Globe,
      title: "Hosting & Domains",
      description: "Secure web hosting solutions and domain management services.",
      features: ["Web Hosting", "Domain Registration", "SSL Certificates", "Backup Solutions"]
    },
    {
      icon: Zap,
      title: "Motion Graphics",
      description: "Engaging animations and motion graphics that bring your content to life.",
      features: ["2D/3D Animation", "Logo Animation", "Explainer Videos", "Visual Effects"]
    },
    {
      icon: GraduationCap,
      title: "E-learning Platforms",
      description: "Custom e-learning solutions and digital course development.",
      features: ["Learning Management Systems", "Course Development", "Interactive Content", "Progress Tracking"]
    },
    {
      icon: Leaf,
      title: "Digital Farming Assistant",
      description: "Smart farming solutions with IoT integration and crop management systems.",
      features: ["Crop Monitoring", "Weather Integration", "Yield Prediction", "Farm Analytics"]
    },
    {
      icon: Building,
      title: "Guest House Management",
      description: "Complete management systems for hospitality and accommodation businesses.",
      features: ["Booking System", "Payment Integration", "Guest Management", "Analytics Dashboard"]
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