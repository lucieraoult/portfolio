
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Edgefolio",
      role: "Senior Product Manager",
      period: "Apr 2024 - Present",
      location: "London, UK",
      description: "B2B SaaS startup building products for large investment banks and hedge funds. 1st PM hire reporting to co-founder and working in a cross-functional team of engineers and designers. Responsible for both the hedge fund and the bank products, with a focus on user experience and launching new products.",
      technologies: ["Zero-to-One", "Enterprise SaaS", "Churn Reduction", "Strategy", "Hiring", "First PM"]
    },
    {
      company: "Fixter",
      role: "Product Manager",
      period: "Feb 2022 - Jan 2024",
      location: "London, UK",
      description: "End-to-end car maintenance platform startup, acquired by Renault. 2nd PM hire, company doubled in size during my time there. Led the cross-functional team responsible for enhancing customer experience, operational scalability, and garage supply and also spent some time leading the growth team.",
      technologies: ["Data", "Experimentation", "Growth", "Ops & Supply", "Customer Experience", "Team Processes"]
    },
    {
      company: "Epicery",
      role: "Full-Stack Web Developer",
      period: "Jul 2020 - May 2021",
      location: "Paris, France",
      description: "Food delivery startup focused on premium groceries and artisan shops, acquired by DPD Group. I worked as a full-stack developer in a small team, across our API, customer website, merchant app and internal tools. I led the end-to-end development of the “Send as Gift” feature, from checkout to secure recipient view and implemented a rebrand in Tailwind CSS.",
      technologies: ["Node.js", "Ruby on Rails", "APIs", "React", "Tailwind CSS"]
    },
    {
      company: "Nokues",
      role: "Technical Co-Founder",
      period: "Sep 2018 - Jun 2020",
      location: "Barcelona, Spain",
      description: "Built a web app for end users to browse menus, place orders, and pay, with a management interface for restaurants to handle menus and incoming orders. Onboarded 15 restaurants, saw the app used at 3 events and processed >200 orders. Participated in the Startupbootcamp accelerator.",
      technologies: ["Zero-to-One", "Ruby on Rails", "APIs", "React"]
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
            From engineer to product manager, each role has shaped my understanding
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
                <div className="grid grid-cols-1 gap-8">
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
                    <div class="mt-4">
                      <h4 className="font-semibold mb-3">Focus Areas</h4>
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
      </div>
    </section>
  );
};

export default Experience;
