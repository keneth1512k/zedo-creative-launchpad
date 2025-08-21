import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBackground from "@/assets/it-services-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zedo-blue/5 via-background to-zedo-blue/10"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-zedo-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-4000"></div>
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-5 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zedo-blue/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05)_76%,transparent_77%,transparent)] bg-[length:75px_100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05)_76%,transparent_77%,transparent)] bg-[length:100px_75px]"></div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-zedo-blue rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-32 right-20 w-2 h-2 bg-zedo-blue/80 rounded animate-bounce opacity-50"></div>
        <div className="absolute top-60 left-1/4 w-4 h-4 border border-zedo-blue/50 rounded-full animate-spin opacity-40" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-40 right-1/4 w-6 h-6 border-2 border-dashed border-zedo-blue/30 rounded-lg animate-float opacity-30"></div>
        <div className="absolute bottom-60 left-16 w-5 h-5 bg-gradient-to-br from-zedo-blue to-purple-400 rounded-full animate-pulse opacity-50"></div>
        
        {/* Code symbols */}
        <div className="absolute top-1/4 right-10 text-zedo-blue/30 text-2xl font-mono animate-float">{'<>'}</div>
        <div className="absolute bottom-1/3 left-8 text-zedo-blue/20 text-xl font-mono animate-bounce">{'{ }'}</div>
        <div className="absolute top-1/2 left-1/6 text-zedo-blue/25 text-lg font-mono animate-pulse">{'</>'}</div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 py-24 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Innovation Badge */}
          <div className="inline-flex items-center gap-2 px-8 py-4 mb-10 bg-gradient-to-r from-zedo-blue/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-zedo-blue/20 shadow-lg animate-fade-in">
            <div className="w-2 h-2 bg-zedo-blue rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground tracking-wide">⚡ Got an idea let's make it real</span>
            <div className="w-2 h-2 bg-zedo-blue rounded-full animate-pulse animation-delay-1000"></div>
          </div>

          {/* Hero Heading */}
          <div className="mb-8 animate-slide-up">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-none tracking-tight mb-4">
              <span className="block text-foreground mb-2">Got an</span>
              <span className="block bg-gradient-to-r from-zedo-blue via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse-glow">
                idea
              </span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-muted-foreground/80">
              let's make it <span className="text-zedo-blue">real</span>
            </h2>
          </div>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-in font-sans opacity-90">
            Transform your vision into reality with cutting-edge technology solutions that drive innovation and growth.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 animate-slide-up">
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
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button 
              variant="outline" 
              size="xl" 
              className="group border-2 border-zedo-blue/30 hover:border-zedo-blue hover:bg-zedo-blue/5 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => {
                const portfolioSection = document.getElementById('portfolio');
                portfolioSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Play className="mr-3 group-hover:scale-125 transition-transform duration-300 text-zedo-blue" />
              <span className="text-foreground group-hover:text-zedo-blue transition-colors">Explore Our Work</span>
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-border/30">
            {[
              { number: "150+", label: "Projects Delivered", icon: "🚀" },
              { number: "98%", label: "Client Satisfaction", icon: "⭐" },
              { number: "5+", label: "Years of Excellence", icon: "🏆" },
              { number: "24/7", label: "Expert Support", icon: "💬" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group text-center animate-fade-in hover:transform hover:scale-105 transition-all duration-300" 
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="mb-3 text-2xl opacity-60 group-hover:opacity-100 transition-opacity">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-black text-zedo-blue mb-2 group-hover:text-purple-500 transition-colors">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;