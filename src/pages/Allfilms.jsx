import React from "react";
import { sampleData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Allfilms = () => {
  const navigate = useNavigate();
  return (
    <div className="m-3">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {sampleData.map((item, index) => (
          <div
            key={index}
            className="shadow-md p-2 cursor-pointer"
            onClick={() => navigate(`/films/${item.id}`)}
          >
            <img
              className="w-full h-auto object-cover max-h-[150px] sm:max-h-[180px] md:max-h-[200px] lg:max-h-[220px]"
              src={item.images[0]}
              alt={item.title}
            />
            <p className="text-sm font-black uppercase tracking-wide text-gray-700 mt-2">
              {item.title}
            </p>
            <p className="text-xs text-gray-500">
              {item.about.split("|")[0]} | {item.about.split("|")[1]}
              <br />
              {item.about.split("|")[2]}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Allfilms;
