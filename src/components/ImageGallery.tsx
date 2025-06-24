
import React from 'react';

const ImageGallery = () => {
  const logos = [
    {
      id: 1,
      title: "The Booth Crew Logo",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=150&fit=crop",
    },
    {
      id: 2,
      title: "The Settings Brand Logo",
      image: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=200&h=150&fit=crop",
    },
    {
      id: 3,
      title: "Growe Studios Logo",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=150&fit=crop",
    },
    {
      id: 4,
      title: "Dwell App Logo",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=150&fit=crop",
    },
    {
      id: 5,
      title: "Creative Brand Logo",
      image: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=200&h=150&fit=crop",
    },
    {
      id: 6,
      title: "Modern Logo Design",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=150&fit=crop",
    }
  ];

  const designs = [
    {
      id: 1,
      title: "Brand Identity Design",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      title: "Digital Marketing Campaign",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
    },
    {
      id: 3,
      title: "Visual Content Creation",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
    },
    {
      id: 4,
      title: "UI/UX Design Work",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
    },
    {
      id: 5,
      title: "Typography Design",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
    },
    {
      id: 6,
      title: "Creative Layout",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
    }
  ];

  // Duplicate arrays for seamless scrolling
  const duplicatedLogos = [...logos, ...logos];
  const duplicatedDesigns = [...designs, ...designs];

  return (
    <section id="portfolio" className="py-20 section-padding overflow-hidden">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Visual Portfolio
        </h2>
        
        {/* Logos Row - Scrolling Right to Left */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground/80">
            Brand Logos
          </h3>
          <div className="relative">
            <div className="flex animate-scroll-right-to-left">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="flex-shrink-0 mx-4 group"
                >
                  <div className="w-48 h-32 bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300">
                    <img
                      src={logo.image}
                      alt={logo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-sm text-center mt-2 text-foreground/60">
                    {logo.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Designs Row - Scrolling Left to Right */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground/80">
            Design Works
          </h3>
          <div className="relative">
            <div className="flex animate-scroll-left-to-right">
              {duplicatedDesigns.map((design, index) => (
                <div
                  key={`${design.id}-${index}`}
                  className="flex-shrink-0 mx-4 group"
                >
                  <div className="w-72 h-48 bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300">
                    <img
                      src={design.image}
                      alt={design.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-sm text-center mt-2 text-foreground/60">
                    {design.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
