
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp",
      role: "Senior Product Manager",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Leading cross-functional teams to build AI-powered analytics platform serving 10M+ users. Responsible for product strategy, roadmap planning, and stakeholder management.",
      achievements: [
        "Increased user engagement by 340% through ML-driven personalization",
        "Led migration to microservices architecture (15% performance improvement)",
        "Launched 3 major features with 95%+ customer satisfaction scores",
        "Managed $2M annual product budget with 15% YoY cost optimization"
      ],
      technologies: ["React", "Python", "Kubernetes", "PostgreSQL", "Redis", "ML Pipelines"]
    },
    {
      company: "StartupXYZ",
      role: "Product Manager",
      period: "2020 - 2022",
      location: "Austin, TX",
      description: "Built and scaled B2B SaaS platform from MVP to Series A. Worked closely with engineering team to establish product development processes and customer feedback loops.",
      achievements: [
        "Grew ARR from $0 to $5M in 18 months",
        "Implemented agile development process (30% faster delivery)",
        "Reduced churn rate by 45% through proactive customer success",
        "Launched API platform with 200+ integrations"
      ],
      technologies: ["Node.js", "MongoDB", "Docker", "AWS", "GraphQL", "Stripe API"]
    },
    {
      company: "BigTech Inc",
      role: "Associate Product Manager",
      period: "2018 - 2020",
      location: "Seattle, WA",
      description: "Supported mobile app development for consumer platform with 50M+ MAU. Focused on user onboarding, retention, and core feature development.",
      achievements: [
        "Improved onboarding completion rate by 60%",
        "A/B tested 20+ features with statistical significance",
        "Collaborated with data science team on predictive models",
        "Reduced app crash rate by 80% through systematic debugging"
      ],
      technologies: ["React Native", "Swift", "Kotlin", "Firebase", "Amplitude", "Figma"]
    },
    {
      company: "DevStudio",
      role: "Software Engineer",
      period: "2016 - 2018",
      location: "Portland, OR",
      description: "Full-stack developer building custom web applications for clients. Transitioned from engineering to product management through customer-facing project leadership.",
      achievements: [
        "Delivered 15+ client projects on time and under budget",
        "Led technical architecture decisions for 3 major projects",
        "Mentored 2 junior developers in modern web frameworks",
        "Established code review and deployment best practices"
      ],
      technologies: ["JavaScript", "Ruby on Rails", "PostgreSQL", "AWS", "Git", "Linux"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 text-sm tracking-wider uppercase">
            // Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">journey</span> so far
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From engineer to product leader, each role has shaped my understanding
            of what it takes to build exceptional products.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={`${exp.company}-${exp.period}`}
              className="card-glow hover:translate-y-[-2px] transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-3 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary/20 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            <code className="bg-primary/10 px-2 py-1 rounded text-primary text-sm">
              git log --oneline --graph | head -20
            </code>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
