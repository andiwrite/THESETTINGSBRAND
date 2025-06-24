
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 section-padding">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Contact
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <a 
              href="mailto:andiwrite2005@gmail.com"
              className="flex items-center p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
            >
              <Mail className="w-6 h-6 text-primary mr-4" />
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Email
                </h3>
                <p className="text-foreground/70">
                  andiwrite2005@gmail.com
                </p>
              </div>
            </a>
            
            <a 
              href="tel:+233500300772"
              className="flex items-center p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
            >
              <Phone className="w-6 h-6 text-primary mr-4" />
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Phone
                </h3>
                <p className="text-foreground/70">
                  +233 500300772
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
