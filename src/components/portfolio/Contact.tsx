import { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Scroll animations removed

  // EmailJS configuration
  const EMAILJS_PUBLIC_KEY = 'JJhM6A79KQ9HGl3Mi';
  const EMAILJS_TEMPLATE_ID = 'template_3wy79wc';
  const EMAILJS_SERVICE_ID = 'service_lb5sdlv';

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jtoh112166@gmail.com",
      href: "mailto:jtoh112166@gmail.com",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 84350 56100",
      href: "tel:+918435056100",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "jomin-j-joseph-57bbba27b",
      href: "https://linkedin.com/in/jomin-j-joseph-57bbba27b",
      color: "bg-blue-600/10 text-blue-700"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Jomes01",
      href: "https://github.com/Jomes01",
      color: "bg-gray-500/10 text-gray-700"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS with dynamic subject
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_message: formData.message,
        to_name: "Jomin J Joseph",
        subject: `A message by ${formData.name} has been received. Kindly respond at your earliest convenience.`
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="portfolio-section">
      <div className="portfolio-container">
        <div 
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full mx-auto"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div 
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-text-primary">
                Let's Start a Conversation
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Whether you're looking for a mobile app developer, need cybersecurity consultation, 
                or just want to discuss technology, I'm always open to new opportunities and interesting conversations.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface-elevated border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group hover-lift"
                >
                  <div className={`w-12 h-12 rounded-xl ${contact.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">{contact.label}</p>
                    <p className="text-text-muted">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="portfolio-card bg-gradient-to-r from-primary/5 to-primary-dark/5 hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-text-primary">Location</p>
                  <p className="text-text-muted">Palai, Kerala, India</p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="portfolio-card border-green-200 bg-green-50/50 hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="font-medium text-text-primary">Available for Projects</p>
                  <p className="text-text-muted text-sm">Currently accepting new opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className="portfolio-card"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-text-primary flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Send Me a Message
                </h3>
                <p className="text-text-muted text-sm">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-text-primary">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="border-border/50 focus:border-primary/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-text-primary">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="border-border/50 focus:border-primary/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-text-primary">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or inquiry..."
                  rows={5}
                  required
                  className="border-border/50 focus:border-primary/50 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full portfolio-button justify-center hover-glow"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;