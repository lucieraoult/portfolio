
import { Code, Users, Lightbulb, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const principles = [
    {
      icon: Users,
      title: "User-Centric",
      description: "Every decision starts with understanding user needs and pain points.",
    },
    {
      icon: Code,
      title: "Technical",
      description: "Deep technical understanding enables better product decisions.",
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven",
      description: "Constantly exploring new technologies and methodologies.",
    },
    {
      icon: Target,
      title: "Results-Focused",
      description: "Metrics and outcomes guide strategy and implementation.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 text-sm tracking-wider uppercase">
            // About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Crafting digital experiences with{" "}
            <span className="text-gradient">precision</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With 8+ years in product management, I've learned that the best products
            emerge from the intersection of user empathy, technical feasibility,
            and business strategy. My background in engineering gives me a unique
            perspective on what's possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {principles.map((principle, index) => (
            <Card
              key={principle.title}
              className="card-glow hover:translate-y-[-4px] transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{principle.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">My Philosophy</h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  <code className="bg-primary/10 px-2 py-1 rounded text-primary text-sm">
                    const goodProduct = (userNeeds, techCapabilities, businessGoals) => {`{`}
                  </code>
                </p>
                <p className="ml-4 leading-relaxed">
                  I believe great products are born from the careful balance of three
                  critical elements: deep user understanding, technical excellence,
                  and clear business objectives.
                </p>
                <p className="leading-relaxed">
                  <code className="bg-primary/10 px-2 py-1 rounded text-primary text-sm">
                    return intersection(userNeeds, techCapabilities, businessGoals);
                  </code>
                </p>
                <p className="leading-relaxed">
                  <code className="bg-primary/10 px-2 py-1 rounded text-primary text-sm">
                    {`}`};
                  </code>
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Currently Learning</h4>
                <div className="flex flex-wrap gap-2">
                  {["AI/ML Product Strategy", "Web3 Applications", "Rust", "System Design"].map((skill) => (
                    <span
                      key={skill}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Fun Facts</h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• I maintain my own homelab with 5 Raspberry Pis</li>
                  <li>• Coffee brewing enthusiast (V60 > French Press)</li>
                  <li>• Contributing to open-source PM tools</li>
                  <li>• Speak 4 languages (including Python & TypeScript)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
