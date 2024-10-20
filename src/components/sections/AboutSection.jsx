const AboutSection = () => (
  <section id="about" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">About Our Bikes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Performance</h3>
          <p className="text-gray-600">
            Built for speed and efficiency with cutting-edge technology,
            ensuring every ride is smooth and fast.
          </p>
        </div>

        <div className="text-center p-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12h18M9 5l3 7l-3 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Durability</h3>
          <p className="text-gray-600">
            Engineered with high-grade materials to withstand the toughest
            terrains and the longest journeys.
          </p>
        </div>

        <div className="text-center p-6">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-yellow-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 19l-3-3 3-3 3 3-3 3z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Comfort</h3>
          <p className="text-gray-600">
            Ergonomically designed seats and frames, ensuring maximum comfort
            for both short and long rides.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2L2 12h10v10h10V12H12V2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Safety</h3>
          <p className="text-gray-600">
            Equipped with advanced braking systems and lights for enhanced
            safety during day and night rides.
          </p>
        </div>

        <div className="text-center p-6">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5h6M9 12h6M9 19h6M4 5h4M16 5h4M4 12h4M16 12h4M4 19h4M16 19h4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Customization</h3>
          <p className="text-gray-600">
            Offering a wide range of customization options to tailor your bike
            to your style and preferences.
          </p>
        </div>

        <div className="text-center p-6">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-teal-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2L2 12h10v10h10V12H12V2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
          <p className="text-gray-600">
            Designed with sustainability in mind, using eco-friendly materials
            and production methods.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
