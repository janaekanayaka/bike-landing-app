import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WelcomeSection from './components/sections/WelcomeSection';
import AboutSection from './components/sections/AboutSection';
import ProductShowcase from './components/sections/ProductShowcase';
import TestimonialsSection from './components/sections/TestimonialsSection';
import CallToAction from './components/sections/CallToAction';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <WelcomeSection />
      <AboutSection />
      <ProductShowcase />
      <TestimonialsSection />
      <CallToAction />
      <ContactSection />
      <Footer />
    </div>
  );
}