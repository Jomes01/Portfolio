import { ExternalLink, Github, Smartphone, Shield, Database, Zap } from 'lucide-react';

const Projects = () => {
  // Generate a project mockup image
  const projectFeatures = [
    { icon: Smartphone, title: "React Native", description: "Cross-platform mobile development" },
    { icon: Database, title: "Supabase Backend", description: "Real-time database and authentication" },
    { icon: Shield, title: "Secure Authentication", description: "Institutional email verification" },
    { icon: Zap, title: "AI Integration", description: "Gemini API for document processing" }
  ];

  return (
    <section id="projects" className="portfolio-section bg-surface">
      <div className="portfolio-container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Featured Project
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full mx-auto"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Showcasing my latest work in mobile development and educational technology
          </p>
        </div>

        {/* Featured Project - EduAccess */}
        <div className="portfolio-card bg-gradient-to-br from-primary/5 to-primary-dark/5 border-primary/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary text-accent-foreground flex items-center justify-center">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary">EduAccess</h3>
                    <p className="text-text-muted">Faculty Management Mobile App</p>
                  </div>
                </div>

                <p className="text-text-secondary leading-relaxed">
                  EduAccess is a comprehensive React Native-based faculty management mobile application 
                  that revolutionizes how educational institutions handle administrative tasks. Built with 
                  modern technologies and focusing on user experience and security.
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-text-primary">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {projectFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-text-primary text-sm">{feature.title}</p>
                        <p className="text-xs text-text-muted">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Details */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-text-primary">Technical Highlights</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    "In-app Calling",
                    "Web Scraping",
                    "PDF Summarization", 
                    "Offline Caching",
                    "Push Notifications",
                    "Real-time Updates"
                  ].map((tech, index) => (
                    <span key={index} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-text-primary">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {["React Native", "Supabase", "TypeScript", "Gemini AI", "RESTful APIs"].map((tech, index) => (
                    <span key={index} className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Jomes01" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="portfolio-button-outline"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
                <a 
                  href="#contact" 
                  className="portfolio-button"
                >
                  <ExternalLink className="w-5 h-5" />
                  Learn More
                </a>
              </div>
            </div>

            {/* Project Visual */}
            <div className="relative">
              <div className="relative p-8 bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-3xl">
                {/* Phone Mockup */}
                <div className="relative mx-auto w-64 h-96 bg-background rounded-3xl border-8 border-text-primary/20 shadow-2xl overflow-hidden">
                  {/* Screen Content */}
                  <div className="h-full bg-gradient-to-b from-primary/5 to-primary-dark/5 p-6 flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center text-xs text-text-muted mb-6">
                      <span>9:41 AM</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-text-muted rounded-sm"></div>
                        <div className="w-4 h-2 bg-text-muted rounded-sm"></div>
                        <div className="w-4 h-2 bg-primary rounded-sm"></div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <Smartphone className="w-8 h-8 text-accent-foreground" />
                      </div>
                      <h5 className="font-bold text-text-primary">EduAccess</h5>
                      <p className="text-xs text-text-muted">Faculty Management</p>
                    </div>

                    {/* Feature Icons */}
                    <div className="grid grid-cols-2 gap-4 flex-grow">
                      {[
                        { icon: Shield, label: "Security" },
                        { icon: Database, label: "Data" },
                        { icon: Zap, label: "AI Tools" },
                        { icon: Smartphone, label: "Mobile" }
                      ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-center p-4 bg-background/80 rounded-xl">
                          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mb-2">
                            <item.icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-xs text-text-muted">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full floating-animation"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-dark/20 rounded-full floating-animation" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Status */}
        <div className="mt-12 text-center">
          <div className="portfolio-card max-w-2xl mx-auto">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-text-primary">Project Status</h4>
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 font-medium">Currently in Development</span>
              </div>
              <p className="text-text-secondary">
                EduAccess is actively being developed with new features and improvements being added regularly. 
                The core functionality is complete and testing is underway.
              </p>
            </div>
          </div>
        </div>

        {/* More Projects Coming Soon */}
        <div className="mt-16 text-center">
          <div className="portfolio-card bg-gradient-to-r from-muted/50 to-muted/30">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-text-primary">More Projects Coming Soon</h4>
              <p className="text-text-secondary">
                I'm constantly working on new projects and exploring innovative solutions. 
                Stay tuned for more exciting developments in cybersecurity and mobile app development.
              </p>
              <a href="#contact" className="portfolio-button-outline">
                Get Notified
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;