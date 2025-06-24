
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Coffee, Heart, Camera } from 'lucide-react';

const Personal = () => {
  const personalImages = [
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      alt: "Frank at work",
      caption: "In my creative zone"
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      alt: "Frank collaborating",
      caption: "Collaboration sessions"
    },
    {
      src: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop",
      alt: "Frank's workspace",
      caption: "My creative workspace"
    }
  ];

  const interests = [
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Coffee Enthusiast",
      description: "Fueling creativity one cup at a time"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Visual Storyteller",
      description: "Capturing moments and meanings"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Brand Passionate",
      description: "Love crafting meaningful identities"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Accra Explorer",
      description: "Finding inspiration in my city"
    }
  ];

  return (
    <section id="personal" className="py-20 section-padding bg-gradient-to-b from-background to-card/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Beyond the Brand
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A glimpse into the person behind The Settings Brand - my passions, inspirations, and the creative journey.
          </p>
        </div>

        {/* Personal images gallery */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {personalImages.map((image, index) => (
            <Card key={index} className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-500 hover:scale-105">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-white font-medium text-sm">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interests grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <Card key={index} className="group p-6 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:bg-primary/5">
              <CardContent className="p-0 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">
                    {interest.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {interest.title}
                </h3>
                <p className="text-sm text-foreground/60">
                  {interest.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Personal;
