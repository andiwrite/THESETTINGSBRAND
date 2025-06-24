
import React, { useEffect, useState } from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const textArray = [
    "Where strategy meets storytelling and identity becomes art.",
    "Crafting compelling brands that resonate and inspire.",
    "Turning creative visions into powerful digital experiences."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textArray.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding pt-20 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Creative Designer & Writer
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">The Settings</span>
                <br />
                <span className="text-foreground">Brand</span>
              </h1>
            </div>
            
            <div className="h-20 mb-8 flex items-center">
              <p className="text-xl md:text-2xl text-foreground/80 max-w-xl leading-relaxed transition-all duration-500">
                {textArray[currentText]}
              </p>
            </div>
            
            <p className="text-lg text-foreground/60 mb-12">
              by <span className="text-primary font-medium">Frank Offei Aboagye</span> • Accra, Ghana
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button
                onClick={scrollToAbout}
                className="group inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                <ArrowDown className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Explore My Work
              </button>
              
              <button
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-4 border-2 border-primary/20 text-foreground rounded-xl font-medium hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-green-500/20 rounded-3xl blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-500/20 rounded-full blur-xl"></div>
              
              {/* Profile image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 group">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Frank Offei Aboagye - The Settings Brand"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <ArrowDown className="w-6 h-6 text-foreground/40" />
            <div className="w-0.5 h-8 bg-gradient-to-b from-foreground/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
