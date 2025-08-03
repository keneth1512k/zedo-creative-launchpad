import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Revolution",
      category: "Web Development",
      description: "Modern React-based e-commerce platform with advanced features and seamless user experience.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      stats: { users: "10K+", revenue: "+250%", performance: "98%" }
    },
    {
      title: "Smart Farming App",
      category: "Mobile Development",
      description: "IoT-integrated mobile application for precision agriculture and crop monitoring.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop",
      technologies: ["React Native", "IoT", "AI/ML", "Cloud"],
      stats: { farms: "500+", efficiency: "+35%", adoption: "95%" }
    },
    {
      title: "Luxury Brand Identity",
      category: "Graphic Design",
      description: "Complete brand redesign including logo, packaging, and marketing materials for luxury fashion brand.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      technologies: ["Adobe Suite", "Brand Strategy", "Print Design"],
      stats: { recognition: "+180%", sales: "+120%", engagement: "+200%" }
    },
    {
      title: "Hospitality Management",
      category: "Full-Stack System",
      description: "Comprehensive guest house management system with booking, payments, and analytics.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      technologies: ["React", "PostgreSQL", "Payment APIs", "Analytics"],
      stats: { bookings: "+300%", efficiency: "+150%", satisfaction: "98%" }
    },
    {
      title: "Educational Platform",
      category: "E-Learning",
      description: "Interactive online learning platform with video streaming, assessments, and progress tracking.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Video Streaming", "LMS", "Analytics"],
      stats: { students: "5K+", completion: "+85%", rating: "4.9/5" }
    },
    {
      title: "Corporate Film Production",
      category: "Video Production",
      description: "High-end corporate video production showcasing company values and achievements.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop",
      technologies: ["4K Production", "Motion Graphics", "Color Grading"],
      stats: { views: "1M+", engagement: "+400%", awards: "3" }
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 mb-6 bg-background/80 backdrop-blur-md rounded-full border border-border shadow-card">
              <span className="text-sm font-medium text-foreground">🎨 Our Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Featured </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our most impactful projects that showcase our expertise across 
              various industries and technologies.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-background rounded-3xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zedo-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="glass" size="icon">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-card text-foreground text-sm rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                    View Project Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Portfolio CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="group">
                View All Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Request Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;