
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Personal from '../components/Personal';
import Services from '../components/Services';
import ImageGallery from '../components/ImageGallery';
import Projects from '../components/Projects';
import Poetry from '../components/Poetry';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Personal />
      <Services />
      <ImageGallery />
      <Projects />
      <Poetry />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
