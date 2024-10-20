import React, { useState } from 'react';
import { ChevronRight, Star, Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
    <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between items-center h-16">
      <div className="flex-shrink-0">
        <span className="text-2xl font-bold text-blue-600">BikeElite</span>
      </div>
      
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <a href="#welcome" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
          <a href="#products" className="text-gray-600 hover:text-blue-600">Products</a>
          <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
        </div>
      </div>
      
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-blue-600"/> : <Menu className="text-blue-600"/>}
        </button>
      </div>
    </div>
  </div>

  {isOpen && (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#welcome" className="block text-gray-600 hover:text-blue-600 py-2">Home</a>
        <a href="#about" className="block text-gray-600 hover:text-blue-600 py-2">About</a>
        <a href="#products" className="block text-gray-600 hover:text-blue-600 py-2">Products</a>
        <a href="#testimonials" className="block text-gray-600 hover:text-blue-600 py-2">Testimonials</a>
        <a href="#contact" className="block text-gray-600 hover:text-blue-600 py-2">Contact</a>
      </div>
    </div>
  )}
    </nav>

  );
};

const WelcomeSection = () => (
  <section id="welcome" className="pt-20 pb-12 bg-gradient-to-r from-blue-50 to-indigo-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Experience the Future of Cycling
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover our revolutionary carbon fiber bikes that combine performance, comfort, and style.
          </p>
          <a href="#products" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Explore Now
            <ChevronRight className="ml-2" />
          </a>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/api/placeholder/800/600" 
            alt="Premium Bicycle" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">About Our Bikes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Performance</h3>
          <p className="text-gray-600">Built for speed and efficiency with cutting-edge technology.</p>
        </div>
        {/* Add more feature boxes */}
      </div>
    </div>
  </section>
);

const ProductShowcase = () => (
  <section id="products" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Our Premium Bikes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={`/api/placeholder/400/300`}
              alt={`Bike ${item}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Mountain Bike Pro {item}</h3>
              <p className="text-gray-600 mb-4">High-performance mountain bike with advanced features.</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section id="testimonials" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-gray-50 p-6 rounded-lg">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              "The best bike I've ever owned. The quality and performance are outstanding!"
            </p>
            <div className="flex items-center">
              <img
                src={`/api/placeholder/40/40`}
                alt="Customer"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-500">Verified Customer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CallToAction = () => (
  <section className="py-16 bg-blue-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-6">
        Ready to Experience the Difference?
      </h2>
      <p className="text-xl text-blue-100 mb-8">
        Get 10% off your first purchase when you order today
      </p>
      <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50">
        Shop Now
      </button>
    </div>
  </section>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-600 mr-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-600 mr-4" />
                <span>info@bikeelite.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                <span>123 Bike Street, Cycling City, CC 12345</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full p-2 border rounded-lg"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">BikeElite</h3>
          <p className="text-gray-400">
            Premium bikes for the modern cyclist.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#welcome" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
            <li><a href="#products" className="text-gray-400 hover:text-white">Products</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Shipping</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Add social media icons */}
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2024 BikeElite. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

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