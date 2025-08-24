import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, MessageCircle } from "lucide-react";

const Founder = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
            Meet Our <span className="text-primary">Founder</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Leading ZEDOIT with vision, innovation, and a passion for digital transformation.
          </p>

          <div className="bg-card rounded-3xl shadow-card p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Picture */}
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-hover">
                  <img
                    src="/lovable-uploads/ddb2f6de-6c46-4da4-bdbf-049a0d996f3e.png"
                    alt="Kenneth Loth Kingu - CEO of ZEDOIT"
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                  />
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-primary animate-pulse rounded-full"></div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-left">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2 leading-tight">
                  Kenneth Loth Kingu<br />
                  <span className="text-primary">with ZedoIT</span>
                </h3>
                <p className="text-primary font-semibold mb-4 text-lg">
                  Chief Executive Officer (CEO)
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Kenneth is the visionary founder and CEO of ZEDOIT, bringing years of experience in 
                  technology innovation and digital transformation. His passion for creating cutting-edge 
                  solutions drives our mission to make technology work for everyone. Under his leadership, 
                  ZEDOIT has become a trusted partner for businesses seeking digital excellence.
                </p>
                
                {/* Contact Actions */}
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="group"
                    onClick={() => window.open('mailto:info@zedoit.com', '_blank')}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact CEO
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group"
                    onClick={() => window.open('https://wa.me/255682800037', '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="group"
                    onClick={() => window.open('#', '_blank')}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;