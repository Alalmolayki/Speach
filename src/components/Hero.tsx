import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80"
          alt="Conference Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-4">
          SPEACH - 2025
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          13-15 Haziran | Speak For Change Humanity
        </p>
        <a
          href="#basvuru"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
        >
          Hemen Başvur
        </a>
      </div>
    </div>
  );
};

export default Hero;