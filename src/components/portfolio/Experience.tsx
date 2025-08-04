import { Calendar, MapPin, Building, Code, Shield, Database } from 'lucide-react';

const Experience = () => {

  const experiences = [
    {
      title: "Data Analysis Intern",
      company: "VE Commercial Vehicles Ltd.",
      location: "Pithampur, India",
      period: "Summer 2025",
      type: "Completed",
      description: "Completed summer internship focused on data analysis and practical engineering applications. Gained valuable hands-on experience in industrial processes, data interpretation, and team collaboration.",
      skills: ["Data Analysis", "Industrial Engineering", "Process Optimization", "Team Collaboration"],
      icon: Building,
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "Cybersecurity Intern",
      company: "Corizo",
      location: "Remote",
      period: "2024",
      type: "Completed",
      description: "Gained hands-on experience in cybersecurity practices, threat analysis, and security protocols. Enhanced understanding of real-world security challenges and defense mechanisms.",
      skills: ["Threat Analysis", "Security Protocols", "Risk Assessment", "Incident Response"],
      icon: Shield,
      color: "bg-red-500/10 text-red-600"
    },
    {
      title: "React Native Developer",
      company: "EduAccess Project",
      location: "Personal Project",
      period: "2024 - Present",
      type: "Ongoing",
      description: "Developing a comprehensive faculty management mobile application using React Native and Supabase. Implementing advanced features like in-app calling, secure authentication, and AI-powered document summarization.",
      skills: ["React Native", "Supabase", "API Integration", "Mobile Development", "UI/UX Design"],
      icon: Code,
      color: "bg-green-500/10 text-green-600"
    }
  ];

  return (
    <section id="experience" className="portfolio-section">
      <div className="portfolio-container">
        <div 
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full mx-auto"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Building practical skills through internships and hands-on projects in cybersecurity and development
          </p>
        </div>

        <div 
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="portfolio-card group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Icon and Type */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-2xl ${exp.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <exp.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="text-xl font-semibold text-text-primary">
                        {exp.title}
                      </h3>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'Upcoming' ? 'bg-blue-100 text-blue-700' :
                        exp.type === 'Ongoing' ? 'bg-green-100 text-green-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 text-text-muted">
                      <div className="flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-12">
          <p className="text-text-muted mb-6">
            Interested in collaborating or learning more about my experience?
          </p>
          <a href="#contact" className="portfolio-button hover-glow">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;