import React from "react";

const Institute = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-10 max-w-7xl mx-auto">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-10">
      🎓🎥Institute / Workshops
      </h2>

      <ul className="space-y-8 text-gray-700">
        {/* Acting */}
        <li>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Acting</h3>
          <p className="text-base sm:text-lg leading-relaxed">
            At AB Films Production, acting is the heart of storytelling. Over 25 years, we’ve nurtured and showcased remarkable talent from the Garhwal region, giving a voice to local culture through powerful, emotive performances. Our actors breathe life into every character — whether in regional tales or Hindi web series — making stories resonate deeply with audiences.
          </p>
        </li>

        {/* Direction */}
        <li>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Direction</h3>
          <p className="text-base sm:text-lg leading-relaxed">
            Direction at AB Films Production is driven by vision and precision. Our directors craft immersive narratives that honor Garhwali culture while embracing innovative storytelling, guiding each project from script to screen with creativity and excellence.
          </p>
        </li>

        {/* Editing */}
        <li>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Editing</h3>
          <p className="text-base sm:text-lg leading-relaxed">
            Editing is where our stories come alive. Our post-production team meticulously stitches together scenes with rhythm and emotion, ensuring every project delivers a smooth and impactful viewing experience for regional and national audiences.
          </p>
        </li>

        {/* Cinematography */}
        <li>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Cinematography</h3>
          <p className="text-base sm:text-lg leading-relaxed">
            Cinematography at AB Films Production captures the essence of Uttarakhand’s breathtaking landscapes and the emotional depth of our characters. Our camera work enhances storytelling by combining traditional beauty with cinematic innovation.
          </p>
        </li>

        {/* Screenwriting */}
        <li>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Screenwriting</h3>
          <p className="text-base sm:text-lg leading-relaxed">
            Our screenwriting blends culture, tradition, and modern narratives. Each script is crafted with care to reflect the authenticity of our roots while appealing to a wider audience, forming the backbone of our acclaimed Garhwali and Hindi productions.
          </p>
        </li>
      </ul>

      {/* Alumni Section */}
      <div className="mt-12">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Alumni Success Stories
        </h3>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          We take pride in our alumni who are now working in the film industry across India. Some have directed award-winning short films, while others have excelled in acting and cinematography.
        </p>
      </div>

      {/* Optional: Registration Form */}
      {/* <StudentRegistrationForm /> */}
    </section>
  );
};

export default Institute;
