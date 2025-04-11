import React from "react";
import { sampleData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Allfilms = () => {
  const navigate = useNavigate();
  return (
    <div className="m-3">
      <div className="flex flex-wrap gap-10 ">
        {sampleData.map((item, index) => (
          <div className="shadow-md mt-5 p-1 cursor-pointer " key={index} onClick={()=>navigate(`/films/${item.id}`)}>
            <img className="w-63.5" src={item.images[0]} />
            <p
              style={{ fontWeight: 700 }}
              className="text-md font-black uppercase tracking-wide text-gray-700"
            >
              {item.title}{" "}
            </p>
            <p className="text-sm text-gray-500">{item.about}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={() => navigate("/films")}
          className="mt-15 cursor-pointer px-6 py-2 border rounded-md hover:text-white hover:bg-black"
        >
          All Films
        </button>
      </div>
    </div>
  );
};

export default Allfilms;
