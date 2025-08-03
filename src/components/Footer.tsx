import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Web Development", "Mobile Apps", "Graphic Design", "Video Production",
    "Digital Marketing", "IT Support", "Hosting Services", "Consulting"
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-zedo-black text-zedo-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="text-3xl font-bold">
                  ZED
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-primary rounded-full text-primary-foreground text-lg ml-1">
                    ●
                  </span>
                </div>
              </div>
              <p className="text-zedo-white/80 mb-6 max-w-md leading-relaxed">
                Transforming businesses through innovative digital solutions. From creative design to 
                cutting-edge development, we bring your vision to life with excellence and precision.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-zedo-white/90">hello@zedo.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-zedo-white/90">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-zedo-white/90">123 Tech Street, Digital City</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#services" 
                      className="text-zedo-white/70 hover:text-primary transition-colors duration-300"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-zedo-white/70 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-primary/10 rounded-3xl p-8 mb-12 border border-primary/20">
            <div className="text-center md:text-left md:flex md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                <p className="text-zedo-white/80">
                  Get the latest updates on technology trends and our new services.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 md:max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-zedo-white/10 border border-zedo-white/20 text-zedo-white placeholder-zedo-white/60 focus:outline-none focus:border-primary"
                />
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-zedo-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-zedo-white/60 text-sm">
                © {currentYear} ZEDO. All rights reserved. Made with ❤️ for innovation.
              </div>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex items-center justify-center w-10 h-10 bg-zedo-white/10 rounded-xl text-zedo-white/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;