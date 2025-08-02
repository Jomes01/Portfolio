import { Mail, Phone, Github, Linkedin, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Jomes01",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/jomin-j-joseph-57bbba27b",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:jtoh112166@gmail.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:+918435056100",
      label: "Phone"
    }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-surface border-t border-border/50">
      <div className="portfolio-container">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                Jomin<span className="text-primary">J</span> Joseph
              </h3>
              <p className="text-text-secondary leading-relaxed max-w-md">
                Cybersecurity student and React Native developer passionate about creating 
                secure, innovative mobile applications and exploring cutting-edge technologies.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:jtoh112166@gmail.com"
                className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>jtoh112166@gmail.com</span>
              </a>
              <a 
                href="tel:+918435056100"
                className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>+91 84350 56100</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-surface-elevated border border-border/50 flex items-center justify-center hover:bg-primary hover:text-accent-foreground hover:border-primary transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-text-primary">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block text-text-muted hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-text-primary">Services</h4>
            <div className="space-y-3">
              {[
                'Mobile App Development',
                'Cybersecurity Consultation',
                'Data Analysis',
                'Technical Mentoring'
              ].map((service, index) => (
                <p key={index} className="text-text-muted">
                  {service}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-text-muted text-sm">
              <span>© {currentYear} Jomin J Joseph</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors duration-300 group"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;