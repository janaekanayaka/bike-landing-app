import React from "react";
import { ChevronRight } from "lucide-react";

const WelcomeSection = () => (
  <section
    id="welcome"
    className="pt-20 pb-12 bg-gradient-to-r from-blue-50 to-indigo-50"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Experience the Future of Cycling
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover our revolutionary carbon fiber bikes that combine
            performance, comfort, and style.
          </p>
          <a
            href="#products"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Explore Now
            <ChevronRight className="ml-2" />
          </a>
        </div>
        <div className="md:w-1/2">
          <img
            src="/bike_prim.png"
            alt="Premium Bicycle"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  </section>
);

export default WelcomeSection;
