import React from "react";
import {
  about3photo,
  awardPhoto,
  bhumiposter,
  bhumiyal,
  contactPhoto,
  dadi,
} from "../assets/assets";

const Bio = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-10 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        AB Films Production House
      </h1>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 items-center">
        <img
          src={contactPhoto}
          alt="Left"
          className="hidden lg:block w-36 h-36 md:w-52 md:h-52 object-cover rounded-4xl border shadow-lg"
        />

        {/* Center 4 images */}
        {[bhumiyal, dadi, about3photo, bhumiposter].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`About ${index + 1}`}
            className={`w-24 sm:w-28 md:w-36 h-24 sm:h-28 md:h-36 object-cover rounded-full border shadow-md ${
              index > 1 ? "hidden md:block" : ""
            }`}
          />
        ))}

        {/* Right large image - only on large screens */}
        <img
          src={awardPhoto}
          alt="Right"
          className="hidden lg:block w-36 h-36 md:w-52 md:h-52 object-cover rounded-4xl border shadow-lg"
        />
      </div>

      {/* Description */}
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
        <strong>AB Films Production</strong> is a pioneer in the regional film
        industry, proudly creating compelling cinema for over{" "}
        <strong>25 years</strong>. Founded with a passion to showcase the rich
        culture of Uttarakhand, we have become a household name in the world of{" "}
        <strong>Garhwali movies and series</strong>.
        <br />
        <br />
        Through decades of dedication, we’ve not only entertained but also
        preserved and promoted the vibrant heritage of the Garhwal region. Our
        content reflects the soul of the hills, connecting deeply with audiences
        across generations.
        <br />
        <br />
        As storytelling evolves, so do we. Expanding beyond regional cinema, AB
        Films Production is now stepping into the broader landscape of{" "}
        <strong>Hindi movies and web series</strong>. Our mission remains the
        same — to create authentic, powerful, and meaningful stories that
        resonate with hearts everywhere.
        <br />
        <br />
        With a legacy of excellence and a vision for the future, we continue to
        push boundaries and bring fresh, engaging narratives to screens both big
        and small.
      </p>
    </section>
  );
};

export default Bio;
