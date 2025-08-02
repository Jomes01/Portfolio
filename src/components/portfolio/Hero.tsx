import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import profileImage from '@/assets/jomin-profile.jpg';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
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

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl floating-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="portfolio-container relative z-10">
        <div className="text-center space-y-8 fade-up">
          {/* Profile Image */}
          <div className="relative inline-block">
            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img 
                src={profileImage} 
                alt="Jomin J Joseph" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <div className="w-8 h-8 bg-accent-foreground rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="portfolio-title">
                Jomin J Joseph
              </h1>
              <div className="h-8 flex items-center justify-center">
                <span className="portfolio-subtitle transition-all duration-500">
                  {titles[currentTitle]}
                </span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Cybersecurity B.Tech student at St. Joseph's College of Engineering and Technology, Palai. 
              Passionate about exploring new technologies, specializing in React Native app development and data analysis.
            </p>

            {/* Location */}
            <div className="flex items-center justify-center gap-2 text-text-muted">
              <MapPin className="w-4 h-4" />
              <span>Palai, Kerala, India</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a href="#contact" className="portfolio-button">
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
              <a href="#projects" className="portfolio-button-outline">
                View My Work
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 pt-8">
              <a 
                href="https://github.com/Jomes01" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-surface-elevated border border-border/50 flex items-center justify-center hover:bg-primary hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/jomin-j-joseph-57bbba27b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-surface-elevated border border-border/50 flex items-center justify-center hover:bg-primary hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:jtoh112166@gmail.com"
                className="w-12 h-12 rounded-full bg-surface-elevated border border-border/50 flex items-center justify-center hover:bg-primary hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-text-muted" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;