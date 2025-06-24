
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Image, PenTool, Monitor, ArrowUpRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Branding & Identity Design",
      description: "Complete brand identity systems that tell your story and connect with your audience on a deeper level.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"]
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Graphics & Visual Content",
      description: "Compelling visuals that capture attention and communicate effectively across all platforms.",
      features: ["Social Media Graphics", "Marketing Materials", "Print Design", "Digital Assets"]
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Creative & Copywriting",
      description: "Words that connect, engage, and convert your audience while staying true to your brand voice.",
      features: ["Brand Copy", "Creative Writing", "Content Strategy", "Poetry & Prose"]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "UI/UX (Beginner Projects)",
      description: "User-centered design solutions for digital experiences that are both beautiful and functional.",
      features: ["Website Design", "App Interfaces", "User Research", "Prototyping"]
    }
  ];

  return (
    <section id="services" className="py-20 section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            What I Do
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            From strategic brand development to creative execution, I offer comprehensive design and writing services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group p-8 border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-0">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 mb-4">
                      {service.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-foreground/40 group-hover:text-primary group-hover:scale-110 transition-all" />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="px-3 py-1 bg-primary/5 text-primary text-sm rounded-full border border-primary/10 group-hover:bg-primary/10 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
