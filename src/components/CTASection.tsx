import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-primary rounded-full opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-primary rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-8 shadow-glow animate-pulse-glow">
            <Sparkles className="w-10 h-10 text-primary-foreground" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-in">
            <span className="text-foreground">Ready to elevate your brand?</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Let's work together!
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-sans animate-fade-in">
            Transform your digital presence with innovative solutions that drive real results. 
            Start your journey with ZEDOIT today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
            <Button variant="hero" size="xl" className="group shadow-glow">
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="xl" className="group">
              Schedule Consultation
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-6 font-sans">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['TechStartup', 'CreativeStudio', 'InnovateCorp', 'DigitalFirst', 'FutureVision'].map((company, index) => (
                <div key={index} className="text-lg font-display font-semibold text-muted-foreground hover:text-primary transition-colors">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;