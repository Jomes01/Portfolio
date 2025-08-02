import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Sparkles, ArrowRight, Download } from 'lucide-react';
import profileImage from '@/assets/jomin-profile.jpg';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const titles = [
    "Cybersecurity Student",
    "React Native Developer", 
    "Tech Enthusiast",
    "Problem Solver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary-dark/5"></div>
        
        {/* Morphing Shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/20 to-primary-dark/10 rounded-full blur-3xl floating-animation opacity-60" style={{ animation: 'float 8s ease-in-out infinite, morph 15s ease-in-out infinite' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-accent/20 to-primary-glow/15 rounded-full blur-3xl floating-animation opacity-70" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-primary-glow/30 to-primary/20 rounded-full blur-2xl floating-animation opacity-50" style={{ animationDelay: '4s' }}></div>
        
        {/* Orbiting Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="orbit opacity-20">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="orbit-reverse opacity-15">
            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
          </div>
        </div>
        
        {/* Parallax Cursor Effect */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-primary/5 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transform: 'translate3d(0, 0, 0)'
          }}
        ></div>
      </div>

      <div className="portfolio-container relative z-10">
        <div className="text-center space-y-12 fade-up">
          {/* Profile Section */}
          <div className="relative inline-block group">
            {/* Glowing Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary-dark opacity-20 pulse-ring"></div>
            
            {/* Profile Container */}
            <div className="relative">
              <div className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto rounded-full overflow-hidden glass-card group-hover:scale-105 transition-all duration-500">
                <img 
                  src={profileImage} 
                  alt="Jomin J Joseph" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Status Indicator */}
              <div className="absolute -bottom-4 -right-4 glass-card rounded-full p-3 magnetic-hover">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-text-primary hidden sm:block">Available</span>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -left-4 glass-card rounded-xl p-2 floating-animation">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Name & Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold hero-gradient-text leading-tight">
                Jomin J Joseph
              </h1>
              
              <div className="h-12 flex items-center justify-center">
                <span className="text-xl md:text-2xl lg:text-3xl font-medium text-shimmer">
                  {titles[currentTitle]}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-lg md:text-xl lg:text-2xl text-text-secondary leading-relaxed font-light">
                Crafting secure digital experiences through innovative 
                <span className="text-primary font-medium"> cybersecurity solutions</span> and 
                <span className="text-primary font-medium"> cutting-edge mobile applications</span>
              </p>
              
              {/* Location with glass effect */}
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-text-muted font-medium">Palai, Kerala, India</span>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
              <a 
                href="#contact" 
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark text-accent-foreground px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Let's Connect
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="#projects" 
                className="group glass-card px-8 py-4 rounded-2xl font-semibold text-lg text-primary hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1 border-2 border-primary/30 hover:border-primary/50"
              >
                <span className="flex items-center gap-3">
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  View Portfolio
                </span>
              </a>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex justify-center gap-4 pt-8">
              {[
                { icon: Github, href: "https://github.com/Jomes01", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/jomin-j-joseph-57bbba27b", label: "LinkedIn" },
                { icon: Mail, href: "mailto:jtoh112166@gmail.com", label: "Email" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="group relative w-14 h-14 glass-card rounded-2xl flex items-center justify-center hover:bg-primary hover:text-accent-foreground transition-all duration-300 hover:scale-110 magnetic-hover"
                >
                  <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 glass-card px-3 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    {social.label}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/20"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-xs text-text-muted font-medium tracking-wider uppercase">Scroll to explore</span>
            <div className="animate-bounce">
              <ChevronDown className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;