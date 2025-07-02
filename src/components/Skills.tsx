
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Code, 
  BarChart3, 
  Users, 
  Zap, 
  Database,
  Palette,
  MessageSquare 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "Product Strategy",
      skills: [
        "Product Roadmapping", "Market Research", "Competitive Analysis", 
        "User Research", "MVP Definition", "Go-to-Market Strategy",
        "Product-Market Fit", "OKRs & KPIs"
      ]
    },
    {
      icon: Code,
      title: "Technical Skills",
      skills: [
        "JavaScript/TypeScript", "Python", "React", "Node.js", 
        "SQL", "Git", "API Design", "System Architecture",
        "Cloud Platforms (AWS/GCP)", "Docker"
      ]
    },
    {
      icon: BarChart3,
      title: "Analytics & Data",
      skills: [
        "Google Analytics", "Mixpanel", "Amplitude", "SQL",
        "A/B Testing", "Statistical Analysis", "Cohort Analysis",
        "Data Modeling", "KPI Tracking", "Conversion Optimization"
      ]
    },
    {
      icon: Users,
      title: "Leadership & Process",
      skills: [
        "Agile/Scrum", "Cross-functional Teams", "Stakeholder Management",
        "Product Requirements", "User Story Writing", "Sprint Planning",
        "Risk Management", "Vendor Management"
      ]
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: [
        "Figma", "User Journey Mapping", "Wireframing", "Prototyping",
        "Design Systems", "Accessibility", "Information Architecture",
        "Usability Testing", "Design Thinking"
      ]
    },
    {
      icon: MessageSquare,
      title: "Communication",
      skills: [
        "Technical Writing", "Presentation Skills", "Customer Interviews",
        "Executive Reporting", "Documentation", "Training & Mentoring",
        "Public Speaking", "Cross-cultural Communication"
      ]
    }
  ];

  const tools = [
    "Jira", "Notion", "Slack", "Linear", "Figma", "Miro", "Postman",
    "GitHub", "Datadog", "Sentry", "Looker", "Tableau", "Confluence"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 text-sm tracking-wider uppercase">
            // Skills & Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tools of the <span className="text-gradient">trade</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through years of hands-on experience
            in product development, from strategy to execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="card-glow hover:translate-y-[-2px] transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Favorite Tools & Platforms</h3>
            <p className="text-muted-foreground">
              The software and services I reach for most often
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <Badge
                key={tool}
                className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tool}
              </Badge>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm">
              <code className="bg-primary/10 px-2 py-1 rounded text-primary">
                npm install experience@latest --save-dev
              </code>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
