import { Button } from "@/components/ui/button";
import { Lightbulb, Target, Zap, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of the curve with cutting-edge technologies and creative solutions."
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Every project is focused on delivering measurable results and exceeding expectations."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Rapid development cycles without compromising on quality or attention to detail."
    },
    {
      icon: Users,
      title: "Client Focused",
      description: "Your success is our success. We build lasting partnerships through exceptional service."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">About </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">ZEDO</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a creative technology company that bridges the gap between imagination and reality, 
              delivering comprehensive digital solutions that drive business growth.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">Our Vision</span>
              </div>
              
              <h3 className="text-3xl font-bold text-foreground">
                Empowering Businesses Through Digital Innovation
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                At ZEDO, we believe that every business deserves exceptional digital experiences. 
                Our multidisciplinary team combines technical expertise with creative vision to 
                deliver solutions that not only meet your needs but exceed your expectations.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                From startups to enterprises, we've helped numerous clients transform their 
                ideas into successful digital products. Our approach is collaborative, 
                transparent, and always focused on delivering real value.
              </p>

              <Button variant="outline" size="lg" className="mt-6">
                Learn More About Us
              </Button>
            </div>

            {/* Right Content - Statistics */}
            <div className="bg-background rounded-3xl p-8 shadow-card">
              <h4 className="text-2xl font-bold text-foreground mb-8 text-center">Why Choose ZEDO?</h4>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "100%", label: "Client Satisfaction" },
                  { number: "50+", label: "Technologies Mastered" },
                  { number: "24h", label: "Average Response Time" },
                  { number: "∞", label: "Creative Possibilities" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-2xl bg-gradient-hero">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-primary">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;