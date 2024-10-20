import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      rating: 5,
      comment: "The best bike I've ever owned. The quality and performance are outstanding!",
      name: "John Doe",
      image: "/users_1.png",
    },
    {
      id: 2,
      rating: 4,
      comment: "Great bike! Perfect for my daily commute and weekend adventures.",
      name: "Jane Smith",
      image: "/users_2.jpg",
    },
    {
      id: 3,
      rating: 5,
      comment: "Amazing build quality and comfortable to ride. Highly recommend!",
      name: "Michael Lee",
      image: "/users_3.jpg",
    },
    {
      id: 4,
      rating: 4,
      comment: "I love the sleek design, and it performs excellently on mountain trails.",
      name: "Emma Johnson",
      image: "/users_4.jpg",
    },
    {
      id: 5,
      rating: 5,
      comment: "Excellent value for the price. Great customer service too.",
      name: "Chris Davis",
      image: "/users_5.jpg",
    },
    {
      id: 6,
      rating: 5,
      comment: "Super smooth ride! Best purchase I’ve made this year.",
      name: "Sophia Martinez",
      image: "/users_6.jpg",
    }
  ];

 
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 60000); 
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">What Our Customers Say</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Read genuine reviews from our valued customers about their experiences with our bikes
        </p>

        <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
          <button
            onClick={handlePrevious}
            className="p-3 sm:p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
          <button
            onClick={handleNext}
            className="p-3 sm:p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.comment}"
              </p>
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-600"
                    onError={(e) => {
                      e.target.src = "/api/placeholder/40/40";
                    }}
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(testimonials.length - 2)].map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-blue-600 w-4' : 'bg-gray-300'
              }`}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              aria-label={`Go to testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
