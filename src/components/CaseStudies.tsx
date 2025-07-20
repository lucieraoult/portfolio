
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, Zap, Target } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Scaling Operations",
      company: "Fixter",
      description: "Led the development of an automated booking allocation algorithm that scaled ops and unlocked growth.",
      challenge: "A surge in demand overwhelmed Fixter's operations, bookings had to be capped and core metrics were declining quickly. The challenge was a lack of visibility into ops processes.",
      solution: "I identified allocation as the biggest bottleneck and redesigned the algorithm to handle complex variables like capacity, repair types, pricing, and timing. I tested assumptions quickly with the engineering lead and iterated based on results.",
      impact: [
        { icon: Zap, label: "30% decrease in total ops workload", value: "30%" },
        { icon: TrendingUp, label: "65% automatic booking allocation, up from 15%", value: "65%" },
        { icon: Target, label: "At peak period the next year, we handled 1.5x bookings with healthy metrics", value: "1.5x" },
        { icon: Users, label: "Ops were initially skeptical but became the system's strongest advocates", value: "Trust" }
      ],
      technologies: ["Data analysis", "User interviews", "Hypothesis-driven iterations"],
      timeline: "2 months",
      role: "Collaborated closely with the engineering lead outside of sprints to deliver results quickly. Led discovery, prioritisation, and iteration while balancing multiple product streams.",
    },
    {
      title: "Fixing the Delivery Experience (NPS)",
      company: "Fixter",
      description: "Increased customer satisfaction and conversion rate by improving communication around car delivery times.",
      challenge: "I was tasked with improving NPS. The team suspected late collections, but by analysing feedback and delivery data, I found the real issue: only 15% of deliveries were on time, compared to 80% of collections.",
      solution: "I ran several A/B tests to replace arbitrary customer-selected delivery times with realistic windows. Early versions lowered conversion, but later iterations significantly improved it while keeping expectations realistic. I also implemented flows to enable garages to confirm return times upfront and notify customers with a clear, reliable window.",
      impact: [
        { icon: TrendingUp, label: "Checkout conversion rate increased by 7.5% overall", value: "7.5%" },
        { icon: Users, label: "NPS increased by 4.6 points", value: "4.6 pts" },
        { icon: Zap, label: "Deliveries on time went from 15% to 81%", value: "81%" },
        // { icon: Target, label: "200+ API integrations", value: "200+" }
      ],
      technologies: ["Product discovery", "Growth", "A/B testing", "Data analysis"],
      timeline: "3 months",
      role: "Led team of 5 engineers and 1 designer. Owned discovery, experimentation, and final implementation.",
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 text-sm tracking-wider uppercase">
            // Case Studies
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Products that <span className="text-gradient">delivered</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real-world examples of how I've helped teams build, scale, and optimise
            products that drive meaningful business outcomes.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card
              key={study.title}
              className="card-glow border-0 bg-card/50 backdrop-blur-sm overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Content */}
                  <div className="p-8 lg:p-12 lg:col-span-3">
                    <div className="mb-6">
                      <Badge className="bg-primary/10 text-primary mb-4">
                        {study.company}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {study.description}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider">Challenge</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider">Solution</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {study.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Focus areas</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-muted text-muted-foreground text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Timeline: {study.timeline}</span>
                          {/* <Button variant="ghost" size="sm" className="h-auto p-0">
                            <ExternalLink className="h-3 w-3" />
                          </Button> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div className="bg-muted/30 p-8 lg:p-12 flex flex-col justify-center lg:col-span-2">
                    <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider">Impact</h4>
                    <div className="grid grid-cols-2 gap-6">
                      {study.impact.map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <metric.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="text-2xl font-bold text-primary mb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground leading-tight">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 p-4 bg-background/50 rounded-lg">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        <strong>Role:</strong> {study.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more detailed case studies?
          </p>
          <Button variant="outline" className="group">
            Request Full Portfolio
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default CaseStudies;
