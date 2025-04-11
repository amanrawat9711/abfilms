import React from "react";

const Team = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-10 max-w-7xl mx-auto">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        🧑‍💼 Our Team
      </h2>

      {/* Founder / Director */}
      <div className="mb-12">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-3">
          Founder / Director
        </h3>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Mr. XYZ is a visionary filmmaker and the driving force behind AB Films Production. With over 20 years of hands-on experience in the Indian film industry, he has been instrumental in shaping the narrative of regional cinema — especially Garhwali films — and now actively contributes to mainstream Hindi productions. His deep-rooted passion for storytelling, combined with a relentless pursuit of excellence, has transformed local stories into cinematic masterpieces. As a mentor, he continues to inspire the next generation of filmmakers and artists, nurturing raw talent with his sharp eye for creativity and authenticity.
        </p>
      </div>

      {/* Core Team */}
      <div className="mb-12">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-3">
          Core Team
        </h3>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          At the heart of AB Films Production is a dynamic core team of skilled directors, editors, writers, cinematographers, and producers. Together, they form the backbone of every project — turning concepts into captivating visual experiences. Our team is known for its seamless collaboration, technical mastery, and creative innovation. Every member brings their unique vision to the table, working collectively to maintain the high standards of storytelling that AB Films Production is celebrated for. Their commitment ensures that every film, series, or commercial not only meets expectations but often exceeds them.
        </p>
      </div>

      {/* Meet the Makers */}
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-3">
          “Meet the Makers”
        </h3>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Beyond the spotlight, there’s a passionate team of unsung heroes — from assistants, line producers, and set designers to interns, stylists, and editors — who pour their hearts into every frame we create. "Meet the Makers" is our tribute to those behind the scenes who turn dreams into reality. They’re the ones working tirelessly on set and in studios, ensuring every scene is lit perfectly, every edit is seamless, and every production day runs smoothly. Their dedication, creativity, and love for cinema are what make AB Films Production not just a company, but a creative family.
        </p>
      </div>
    </section>
  );
};

export default Team;
