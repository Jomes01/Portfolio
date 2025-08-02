import { Smartphone, BarChart3, Shield, Database, Brain, Code2 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Mobile Development",
      icon: Smartphone,
      color: "bg-blue-500/10 text-blue-600 border-blue-200",
      skills: [
        { name: "React Native", level: 90 },
        { name: "Mobile UI/UX", level: 85 },
        { name: "App Store Deployment", level: 75 },
        { name: "Cross-platform Development", level: 88 }
      ]
    },
    {
      category: "Cybersecurity",
      icon: Shield,
      color: "bg-red-500/10 text-red-600 border-red-200",
      skills: [
        { name: "Security Principles", level: 82 },
        { name: "Threat Analysis", level: 78 },
        { name: "Risk Assessment", level: 75 },
        { name: "Security Protocols", level: 80 }
      ]
    },
    {
      category: "Data & Backend",
      icon: Database,
      color: "bg-green-500/10 text-green-600 border-green-200",
      skills: [
        { name: "Supabase", level: 85 },
        { name: "Data Analysis", level: 80 },
        { name: "API Integration", level: 88 },
        { name: "Database Design", level: 75 }
      ]
    },
    {
      category: "Problem Solving",
      icon: Brain,
      color: "bg-purple-500/10 text-purple-600 border-purple-200",
      skills: [
        { name: "Analytical Thinking", level: 92 },
        { name: "Creative Solutions", level: 88 },
        { name: "Debugging", level: 85 },
        { name: "System Design", level: 78 }
      ]
    }
  ];

  const tools = [
    "React Native", "Supabase", "JavaScript", "TypeScript", "Git", "VS Code",
    "Figma", "Postman", "Firebase", "Node.js", "REST APIs", "Mobile Development",
    "Cybersecurity Tools", "Data Analysis", "UI/UX Design", "Agile Methodology"
  ];

  return (
    <section id="skills" className="portfolio-section bg-surface">
      <div className="portfolio-container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full mx-auto"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Developing a diverse skill set across cybersecurity, mobile development, and data analysis
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="portfolio-card space-y-6">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary font-medium">{skill.name}</span>
                      <span className="text-sm text-text-muted">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-primary-dark rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="portfolio-card">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-semibold text-text-primary">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool, index) => (
                <span key={index} className="skill-tag">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="text-center pt-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-xl font-semibold text-text-primary">
              Continuous Learning Philosophy
            </h3>
            <p className="text-text-secondary leading-relaxed">
              I believe in staying curious and continuously expanding my knowledge. 
              Technology evolves rapidly, and I'm committed to growing with it, 
              always eager to learn new tools and tackle fresh challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;