
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
      description: "B2B SaaS startup building products for large investment banks and hedge funds. Reporting to co-founder and working in a cross-functional team of engineers and designers.",
      achievements: [
        "Drove a near-million ARR product from concept to launch",
        "Reduced churn rate by >20% in H1 2025 compared to full-year 2024",
        "Led transformation to the product operating model",
        "Hired 2 product designers",
        "Promoted from Product Manager to Senior Product Manager within a year"
      ],
      technologies: ["Zero-to-One", "Enterprise SaaS", "Churn Reduction", "Security and Compliance", "Hiring"]
    },
    {
      company: "Fixter",
      role: "Product Manager",
      period: "Feb 2022 - Jan 2024",
      location: "London, UK",
      description: "End-to-end car maintenance platform startup, acquired by Renault. Led cross- functional teams with a focus on enhancing customer experience, operational scalability, and garage supply.",
      achievements: [
        "Reduced ops workload by 30% through booking-to-garage matching algorithm",
        "Improved garage capacity model, reducing cancellation rate by 9%",
        "Achieved a 20-point NPS increase within a year and +7.5% in overall CR",
        "Led the launch of the market expansion into France, overcoming a 2-month delay"
      ],
      technologies: ["Scaling Operations", "Customer Experience", "Data", "Supply Strategy", "Market Expansion"]
    },
    {
      company: "Epicery",
      role: "Full-Stack Web Developer",
      period: "Jul 2020 - May 2021",
      location: "Paris, France",
      description: "Food delivery startup focused on premium groceries and artisan shops, acquired by DPD Group.",
      achievements: [
        "Led end-to-end development of “Send as Gift” feature, from checkout to secure recipient view",
        "Implemented a rebrand on the website with Tailwind CSS",
        "Worked across the customer website, API backend, merchant app and internal tools"
      ],
      technologies: ["Node.js", "Ruby", "React", "Tailwind CSS", "Ruby on Rails"]
    },
    {
      company: "Nokues",
      role: "Technical Co-Founder",
      period: "Sep 2018 - Jun 2020",
      location: "Barcelona, Spain",
      description: "Full-stack developer building custom web applications for clients. Transitioned from engineering to product management through customer-facing project leadership.",
      achievements: [
        "Built a web app for end users to browse menus, place orders, and pay, with a management interface for restaurants to handle menus and incoming orders",
        "Saw the app used at 3 events and processed over 200 orders",
        "Onboarded 15 restaurants",
        "Participated in Startupbootcamp accelerator"
      ],
      technologies: ["React", "Ruby on Rails", "Ruby"]
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
