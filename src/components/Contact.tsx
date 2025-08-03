import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    projectType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", message: "", projectType: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@zedo.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Tech Street, Digital City",
      description: "Our main office location"
    }
  ];

  const projectTypes = [
    "Web Development",
    "Mobile App Development",
    "Graphic Design",
    "Video Production",
    "Digital Marketing",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 mb-6 bg-background/80 backdrop-blur-md rounded-full border border-border shadow-card">
              <span className="text-sm font-medium text-foreground">💬 Let's Connect</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Start Your </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Project Today</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your vision to life? Get in touch with our team and let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-background rounded-3xl p-8 shadow-card">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Send us a message</h3>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl border-border focus:border-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl border-border focus:border-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:border-primary focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="rounded-xl border-border focus:border-primary resize-none"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Quick Response Promise */}
              <div className="bg-background/80 backdrop-blur-md rounded-3xl p-8 border border-border shadow-card">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-bold text-foreground">Quick Response Guarantee</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  We understand that time is valuable. That's why we guarantee a response to all inquiries within 24 hours.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">&lt; 24h</div>
                    <div className="text-sm text-muted-foreground">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Response Rate</div>
                  </div>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-primary">
                        <contact.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {contact.title}
                      </h4>
                      <p className="text-foreground font-medium">{contact.info}</p>
                      <p className="text-muted-foreground text-sm">{contact.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Alternative Contact */}
              <div className="bg-gradient-primary rounded-3xl p-8 shadow-primary">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-6 h-6 text-primary-foreground mr-3" />
                  <h3 className="text-xl font-bold text-primary-foreground">Prefer to Chat?</h3>
                </div>
                <p className="text-primary-foreground/90 mb-6">
                  Schedule a free 30-minute consultation to discuss your project requirements and get expert advice.
                </p>
                <Button variant="glass" size="lg" className="w-full">
                  Schedule Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;