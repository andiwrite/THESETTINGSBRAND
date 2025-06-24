
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Palette, PenTool, Target, Sparkles } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Visual Design",
      description: "Creating compelling visual narratives"
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Creative Writing",
      description: "Crafting words that resonate"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Brand Strategy",
      description: "Building meaningful connections"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Creative Direction",
      description: "Guiding visions to reality"
    }
  ];

  return (
    <section id="about" className="py-20 section-padding bg-gradient-to-b from-card/30 to-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Main content */}
          <div>
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Creative at Heart
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                I'm <span className="text-primary font-medium">Frank</span>, a creative designer and writer based in the vibrant city of Accra, Ghana. The Settings Brand is my platform to explore the intersection of branding, storytelling, and design.
              </p>
              
              <p>
                I believe in the power of visual storytelling and the magic that happens when strategy meets creativity. Every brand has a unique story to tell, and I'm here to help bring those stories to life through compelling design and meaningful content.
              </p>
              
              <p>
                My approach blends <span className="text-primary font-medium">strategic thinking</span> with <span className="text-primary font-medium">creative execution</span>, ensuring that every project not only looks beautiful but also serves its purpose effectively.
              </p>
            </div>
          </div>

          {/* Right side - Skills grid */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="group p-6 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:bg-primary/5">
                  <CardContent className="p-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">
                        {skill.icon}
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 p-6 bg-card border border-border rounded-xl">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-foreground/60">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">3+</div>
                  <div className="text-sm text-foreground/60">Years</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">20+</div>
                  <div className="text-sm text-foreground/60">Brands</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
