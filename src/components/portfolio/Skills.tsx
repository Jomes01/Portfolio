import { Smartphone, BarChart3, Shield, Database, Brain, Code2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Skills = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: categoriesRef, isVisible: categoriesVisible } = useScrollAnimation();
  const { elementRef: toolsRef, isVisible: toolsVisible } = useScrollAnimation();
  const { elementRef: philosophyRef, isVisible: philosophyVisible } = useScrollAnimation();

  const skillCategories = [
    {
      category: "Mobile Development",
      icon: Smartphone,
      color: "bg-blue-500/10 text-blue-600 border-blue-200",
      skills: [
        "React Native",
        "Mobile UI/UX",
        "App Store Deployment",
        "Cross-platform Development"
      ]
    },
    {
      category: "Cybersecurity",
      icon: Shield,
      color: "bg-red-500/10 text-red-600 border-red-200",
      skills: [
        "Security Principles",
        "Threat Analysis",
        "Risk Assessment",
        "Security Protocols"
      ]
    },
    {
      category: "Data & Backend",
      icon: Database,
      color: "bg-green-500/10 text-green-600 border-green-200",
      skills: [
        "Supabase",
        "Data Analysis",
        "API Integration",
        "Database Design"
      ]
    },
    {
      category: "Problem Solving",
      icon: Brain,
      color: "bg-purple-500/10 text-purple-600 border-purple-200",
      skills: [
        "Analytical Thinking",
        "Creative Solutions",
        "Debugging",
        "System Design"
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
        <div 
          ref={titleRef}
          className={`text-center space-y-4 mb-16 scroll-fade-in ${titleVisible ? 'animate' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full mx-auto"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Developing a diverse skill set across cybersecurity, mobile development, and data analysis
          </p>
        </div>

        {/* Skill Categories */}
        <div 
          ref={categoriesRef}
          className={`grid md:grid-cols-2 gap-8 mb-16 scroll-scale-in ${categoriesVisible ? 'animate' : ''}`}
        >
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`portfolio-card space-y-6 scroll-stagger ${categoriesVisible ? 'animate' : ''}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div 
          ref={toolsRef}
          className={`portfolio-card scroll-slide-right ${toolsVisible ? 'animate' : ''}`}
        >
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
        <div 
          ref={philosophyRef}
          className={`text-center pt-12 scroll-fade-in ${philosophyVisible ? 'animate' : ''}`}
        >
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