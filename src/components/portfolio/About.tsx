import { BookOpen, Target, Users, Lightbulb } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const About = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { elementRef: highlightsRef, isVisible: highlightsVisible } = useScrollAnimation();

  const highlights = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Dedicated to practical implementation and real-world applications of cybersecurity principles."
    },
    {
      icon: BookOpen,
      title: "Continuous Learner",
      description: "Always exploring new technologies and staying updated with the latest in cybersecurity and development."
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Thrives in team environments and enjoys sharing knowledge with fellow developers and students."
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Approaches challenges with creativity and analytical thinking to deliver innovative solutions."
    }
  ];

  return (
    <section id="about" className="portfolio-section bg-surface">
      <div className="portfolio-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div 
              ref={titleRef}
              className={`space-y-4 scroll-fade-in ${titleVisible ? 'animate' : ''}`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full"></div>
            </div>

            <div 
              ref={contentRef}
              className={`space-y-6 text-text-secondary leading-relaxed scroll-slide-left ${contentVisible ? 'animate' : ''}`}
            >
              <p className="text-lg">
                An enthusiastic learner in the field of cybersecurity, I believe in the power of 
                practical implementation. My work ranges from mobile app development to internship 
                experiences that solidify my real-world technical skills.
              </p>
              
              <p>
                Currently pursuing my B.Tech in Cyber Security at St. Joseph's College of Engineering 
                and Technology, Palai, I've developed a strong foundation in both theoretical concepts 
                and hands-on application. My passion extends beyond cybersecurity into the realm of 
                mobile app development, where I specialize in React Native.
              </p>

              <p>
                I'm particularly interested in the intersection of security and user experience, 
                creating applications that are not only functional but also secure by design. 
                My approach combines analytical thinking with creative problem-solving to tackle 
                complex challenges in today's digital landscape.
              </p>
            </div>

            {/* Education */}
            <div className="portfolio-card hover-lift">
              <h3 className="text-xl font-semibold text-text-primary mb-3">Education</h3>
              <div className="space-y-2">
                <p className="font-medium text-primary">B.Tech in Cyber Security</p>
                <p className="text-text-secondary">St. Joseph's College of Engineering and Technology</p>
                <p className="text-sm text-text-muted">Palai, Kerala • Currently Pursuing</p>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div 
            ref={highlightsRef}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 scroll-scale-in ${highlightsVisible ? 'animate' : ''}`}
          >
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className={`portfolio-card group hover:bg-primary/5 transition-all duration-300 scroll-stagger ${highlightsVisible ? 'animate' : ''}`}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-text-primary">
                      {highlight.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;