
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "The Booth Crew",
      description: "Media branding for The Salvation Army Church's creative team — identity, content, and visuals.",
      category: "Branding & Identity"
    },
    {
      title: "The Settings Brand",
      description: "My personal design + writing portfolio and creative umbrella.",
      category: "Personal Brand"
    },
    {
      title: "Growe Studios",
      description: "Visual design and mock branding project for a fictional studio.",
      category: "Concept Design"
    },
    {
      title: "Dwell",
      description: "Branding and interface structure for a personal productivity/creative app.",
      category: "App Design"
    }
  ];

  return (
    <section id="projects" className="py-20 section-padding bg-card/30">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4">
                <span className="text-sm text-primary font-medium">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-foreground/70 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
