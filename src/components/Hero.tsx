
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-warm relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-primary/20 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-primary/10 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <p className="text-primary font-medium mb-4 text-sm tracking-wider uppercase">
            // Senior Product Manager
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building {" "}
            <span className="text-gradient">impactful</span>
             {" "} products
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I bridge the gap between user and business needs,
            turning complex problems into elegant solutions.
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-12">
            <Button
              variant="default"
              size="lg"
              onClick={scrollToAbout}
              className="group"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="mailto:lucieraoult@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="animate-slide-in">
              <div className="text-3xl font-bold text-primary mb-2">6+</div>
              <div className="text-muted-foreground text-sm">Years building</div>
            </div>
            {/* <div className="animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl font-bold text-primary mb-2">?</div>
              <div className="text-muted-foreground text-sm">?</div>
            </div> */}
            <div className="animate-slide-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl font-bold text-primary mb-2">$1M+</div>
              <div className="text-muted-foreground text-sm">Revenue Impact</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
