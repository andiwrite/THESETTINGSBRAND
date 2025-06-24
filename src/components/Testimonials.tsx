
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      company: "Digital Solutions Co.",
      content: "Frank's work on our brand identity was exceptional. He captured our vision perfectly and delivered designs that truly represent who we are.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616c88e9b75?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      company: "TechFlow",
      content: "The Settings Brand helped us establish a strong visual identity. Frank's strategic approach to branding made all the difference.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      company: "Creative Hub",
      content: "Working with Frank was a pleasure. His attention to detail and creative vision exceeded our expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 section-padding bg-card/30">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Client Stories
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/60">
                      {testimonial.role} at {testimonial.company}
                    </p>
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

export default Testimonials;
