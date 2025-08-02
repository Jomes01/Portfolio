import { Smartphone, Shield, BarChart3, Code, Cog, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Custom-built mobile applications using React Native and modern tech stacks tailored to your specific needs and requirements.",
      features: [
        "Cross-platform development",
        "Native performance",
        "Modern UI/UX design",
        "Backend integration"
      ],
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      icon: Shield,
      title: "Security Consultation",
      description: "Basic cybersecurity assessments and recommendations to help secure your applications and digital infrastructure.",
      features: [
        "Security audits",
        "Vulnerability assessment",
        "Best practices guidance",
        "Risk analysis"
      ],
      color: "bg-red-500/10 text-red-600 border-red-200"
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Transform raw data into actionable insights through analysis, visualization, and reporting solutions.",
      features: [
        "Data visualization",
        "Statistical analysis",
        "Report generation",
        "Performance metrics"
      ],
      color: "bg-green-500/10 text-green-600 border-green-200"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end application development with modern frameworks, databases, and cloud integration.",
      features: [
        "Frontend & Backend",
        "Database design",
        "API development",
        "Cloud deployment"
      ],
      color: "bg-purple-500/10 text-purple-600 border-purple-200"
    },
    {
      icon: Cog,
      title: "Technical Integration",
      description: "Seamless integration of various services, APIs, and third-party tools to enhance your application's functionality.",
      features: [
        "API integration",
        "Third-party services",
        "Automation setup",
        "System optimization"
      ],
      color: "bg-orange-500/10 text-orange-600 border-orange-200"
    },
    {
      icon: Users,
      title: "Consultation & Mentoring",
      description: "Technical guidance for students and aspiring developers in cybersecurity and mobile development.",
      features: [
        "Career guidance",
        "Technical mentoring",
        "Code reviews",
        "Best practices"
      ],
      color: "bg-indigo-500/10 text-indigo-600 border-indigo-200"
    }
  ];

  return (
    <section id="services" className="portfolio-section">
      <div className="portfolio-container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full mx-auto"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Offering a range of technical services from mobile app development to cybersecurity consultation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="portfolio-card group hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Icon and Title */}
                <div className="space-y-4">
                  <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-text-primary">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm text-text-muted">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-primary hover:text-primary-dark font-medium group-hover:gap-2 transition-all duration-300"
                  >
                    Learn More
                    <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20 portfolio-card bg-gradient-to-r from-primary/5 to-primary-dark/5">
          <div className="text-center space-y-8">
            <h3 className="text-2xl font-semibold text-text-primary">
              My Development Process
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "Understanding your requirements and goals" },
                { step: "02", title: "Planning", description: "Creating a roadmap and technical strategy" },
                { step: "03", title: "Development", description: "Building with modern tools and best practices" },
                { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support" }
              ].map((phase, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary text-accent-foreground mx-auto flex items-center justify-center font-bold">
                    {phase.step}
                  </div>
                  <h4 className="font-semibold text-text-primary">{phase.title}</h4>
                  <p className="text-sm text-text-muted">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-12">
          <p className="text-text-muted mb-6">
            Ready to bring your ideas to life?
          </p>
          <a href="#contact" className="portfolio-button">
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;