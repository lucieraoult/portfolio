
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Calendar, MapPin, Coffee } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Best for detailed project discussions",
      action: "lucieraoult@gmail.com",
      link: "mailto:lucieraoult@gmail.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Professional networking and updates",
      action: "Connect with me",
      link: "https://linkedin.com/in/lucie-raoult"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my code and contributions",
      action: "View repositories",
      link: "https://github.com/lucieraoult"
    }//,
    // {
    //   icon: Calendar,
    //   title: "Schedule a Call",
    //   description: "30-minute coffee chat about opportunities",
    //   action: "Book time",
    //   link: "https://calendly.com/sarahchen"
    // }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 text-sm tracking-wider uppercase">
            // Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's build something <span className="text-gradient">amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm currently exploring new product opportunities and would love to connect. Whether you're hiring, building something ambitious, or just want to chat about product and tech, feel free to reach out.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-8 mt-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              London
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Looking for a new role
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-4 mb-12">
          <Button
            variant="default"
            size="lg"
            className="group"
          >
            <a
              href="mailto:lucieraoult@gmail.com"
              // className="hover:text-primary transition-colors"
            >
              {/* <Mail className="h-5 w-5" /> */}
              Contact Me
            </a>
          </Button>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://linkedin.com/in/lucie-raoult"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://github.com/lucieraoult"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"> */}
        {/* <div className="flex jusityfy-center items-center flex-wrap gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card
              key={method.title}
              className="card-glow hover:translate-y-[-4px] transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(method.link, '_blank')}
            >
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {method.description}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary-foreground hover:bg-primary w-full"
                >
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* <div className="bg-gradient-warm rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Coffee className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Currently Available</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm open to discussing new opportunities. If you're building something interesting, I'd love to hear about it.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                London
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Looking for a new role
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:lucieraoult@gmail.com">
                  Start a Conversation
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div> */}

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            <code className="bg-primary/10 px-2 py-1 rounded text-primary">
              while(building_great_products) {`{`} keep_learning(); {`}`}
            </code>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground text-sm">
          Built with Lovable, ChatGPT, and a ☕️
        </p>
      </footer>
    </section>
  );
};

export default Contact;
