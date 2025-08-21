import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Code2, Smartphone, Globe, Cpu } from "lucide-react";
import techVector from "@/assets/tech-vector-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-zedo-blue/5">
      
      {/* Main Content Container */}
      <div className="container mx-auto px-6 py-12 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[90vh]">
          
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Innovation Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-zedo-blue/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-zedo-blue/20 shadow-lg animate-fade-in">
              <div className="w-2 h-2 bg-zedo-blue rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-foreground tracking-wide">⚡ Got an idea let's make it real</span>
            </div>

            {/* Main Heading */}
            <div className="mb-8 animate-slide-up">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-none tracking-tight mb-4">
                <span className="block text-foreground mb-2">Got an</span>
                <span className="block bg-gradient-to-r from-zedo-blue via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  idea
                </span>
              </h1>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-muted-foreground/80">
                let's make it <span className="text-zedo-blue">real</span>
              </h2>
            </div>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in">
              Transform your vision into reality with cutting-edge technology solutions that drive innovation and growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-16 animate-slide-up">
              <Button 
                variant="hero" 
                size="xl" 
                className="group relative overflow-hidden bg-gradient-to-r from-zedo-blue to-purple-600 hover:from-purple-600 hover:to-zedo-blue transition-all duration-500 shadow-2xl hover:shadow-zedo-blue/25 transform hover:scale-105"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get Started Now
                  <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                size="xl" 
                className="group border-2 border-zedo-blue/30 hover:border-zedo-blue hover:bg-zedo-blue/5 backdrop-blur-sm transition-all duration-300"
                onClick={() => {
                  const portfolioSection = document.getElementById('portfolio');
                  portfolioSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Play className="mr-3 group-hover:scale-125 transition-transform duration-300 text-zedo-blue" />
                <span className="text-foreground group-hover:text-zedo-blue transition-colors">Explore Our Work</span>
              </Button>
            </div>

            {/* Tech Icons */}
            <div className="flex justify-center lg:justify-start gap-8 animate-fade-in">
              {[
                { icon: Code2, label: "Development" },
                { icon: Smartphone, label: "Mobile Apps" },
                { icon: Globe, label: "Web Solutions" },
                { icon: Cpu, label: "Tech Innovation" }
              ].map((item, index) => (
                <div key={index} className="group flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-zedo-blue group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Vector Illustration */}
          <div className="order-1 lg:order-2 relative animate-fade-in">
            <div className="relative">
              {/* Main Vector Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-zedo-blue/20 transition-all duration-500 transform hover:scale-105">
                <img 
                  src={techVector} 
                  alt="Tech Innovation Vector Illustration" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zedo-blue/10 to-transparent"></div>
              </div>

              {/* Floating Elements around Vector */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-zedo-blue to-purple-500 rounded-2xl flex items-center justify-center animate-float shadow-lg">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-zedo-blue/20 to-purple-500/20 backdrop-blur-sm rounded-xl border border-zedo-blue/30 flex items-center justify-center animate-pulse">
                <Globe className="w-6 h-6 text-zedo-blue" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-border/30">
          {[
            { number: "150+", label: "Projects Delivered" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "5+", label: "Years of Excellence" },
            { number: "24/7", label: "Expert Support" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="group text-center animate-fade-in hover:transform hover:scale-105 transition-all duration-300" 
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className="text-2xl md:text-3xl font-black text-zedo-blue mb-2 group-hover:text-purple-500 transition-colors">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-zedo-blue/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-500/5 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-zedo-blue/10 rounded-lg animate-spin" style={{animationDuration: '10s'}}></div>
      </div>
    </section>
  );
};

export default Hero;