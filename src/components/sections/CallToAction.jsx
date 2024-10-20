import React from "react";

const CallToAction = () => {
  return (
    <section className="relative py-8 sm:py-12 md:py-20 bg-gradient-to-b from-blue-600 to-blue-800 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white opacity-30 animate-fall hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          >
            ❄️
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <img
              src="/santa.jpg"
              alt="Big Santa"
              className="w-30 h-30 sm:w-34 sm:h-34 lg:w-40 lg:h-40"
            />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
            Christmas Special Offer!
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8 px-4">
            Get an exclusive{" "}
            <span className="font-bold text-yellow-300 inline-block">
              10% OFF
            </span>
            <br className="sm:hidden" /> on your first purchase
          </p>

          <div className="flex flex-col items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 text-yellow-300">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M20 8h-3.586l2.293-2.293-1.414-1.414-3.293 3.293v-1.586h-2v5h10v-2c0-1.103-.897-2-2-2zm-6-6c-1.654 0-3 1.346-3 3h-1.586l-3.293-3.293-1.414 1.414 2.293 2.293h-3.586c-1.103 0-2 .897-2 2v2h10v-5h-2v1.586l-3.293-3.293-1.414 1.414 2.293 2.293h-3.586c-1.103 0-2 .897-2 2v2h10v-2c0-1.103-.897-2-2-2zm-6 8v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-10h-10zm4 2h2v6h-2v-6zm8-8h-10v6h10v-6zm-12 8v-10c0-1.103-.897-2-2-2h-10v12h10v-10z" />
              </svg>
              <span className="text-base sm:text-lg">Free Gift Wrapping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
