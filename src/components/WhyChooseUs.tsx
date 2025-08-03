import { CheckCircle, Clock, Award, Users, Zap, Shield } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Industry Expertise",
      description: "5+ years of proven experience delivering exceptional digital solutions across multiple industries.",
      metric: "100+ Projects"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Rapid development cycles with agile methodology ensuring quick time-to-market without compromising quality.",
      metric: "50% Faster"
    },
    {
      icon: Shield,
      title: "Future-Proof Technology",
      description: "We use cutting-edge technologies and best practices to ensure your solution stays relevant for years.",
      metric: "Latest Tech Stack"
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Expert developers, designers, and strategists working collaboratively on your project from start to finish.",
      metric: "15+ Specialists"
    },
    {
      icon: CheckCircle,
      title: "Quality Guaranteed",
      description: "Rigorous testing, code reviews, and quality assurance processes ensure flawless deliverables every time.",
      metric: "99.9% Uptime"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock support and maintenance services to keep your digital assets running smoothly.",
      metric: "Always Available"
    }
  ];

  const achievements = [
    { number: "100+", label: "Projects Completed", description: "Successfully delivered" },
    { number: "50+", label: "Happy Clients", description: "Across various industries" },
    { number: "99%", label: "Client Satisfaction", description: "Exceptional service quality" },
    { number: "24/7", label: "Support Available", description: "Always here when you need us" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 mb-6 bg-gradient-card rounded-full border border-border shadow-card">
              <span className="text-sm font-medium text-foreground">⭐ Excellence Delivered</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Why Choose </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">ZEDO</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just deliver projects – we create lasting partnerships and drive real business growth 
              through innovative digital solutions.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 bg-gradient-card rounded-3xl border border-border shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-primary">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {feature.metric}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="bg-gradient-primary rounded-3xl p-12 shadow-primary">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-primary-foreground mb-4">
                Our Track Record Speaks for Itself
              </h3>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                Numbers that demonstrate our commitment to excellence and client success across all our projects.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-primary-foreground/10 backdrop-blur-md rounded-2xl p-6 group-hover:bg-primary-foreground/20 transition-all duration-300">
                    <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2 group-hover:scale-110 transition-transform duration-300">
                      {achievement.number}
                    </div>
                    <div className="text-lg font-semibold text-primary-foreground/90 mb-1">
                      {achievement.label}
                    </div>
                    <div className="text-sm text-primary-foreground/70">
                      {achievement.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 text-center">
            <h4 className="text-2xl font-bold text-foreground mb-8">Trusted by Industry Leaders</h4>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Placeholder for client logos */}
              {Array.from({ length: 6 }).map((_, index) => (
                <div 
                  key={index}
                  className="w-32 h-16 bg-gradient-card rounded-xl border border-border flex items-center justify-center text-muted-foreground font-medium"
                >
                  Client {index + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;