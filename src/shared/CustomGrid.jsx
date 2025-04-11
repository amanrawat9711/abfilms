import { img1, img2, img3, img4, img5 } from "../assets/assets";

const GalleryGrid = () => {
  return (
    <div className="p-2 sm:p-4 md:p-6">
      <div className="grid gap-3 sm:gap-4 grid-cols-3 grid-rows-2 auto-rows-[120px] sm:auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[300px]">
        {/* Tall image on the left */}
        <div className="row-span-2 col-span-1">
          <img
            src={img1}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="col-span-1 row-span-1">
          <img
            src={img2}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="col-span-1 row-span-1">
          <img
            src={img3}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="col-span-1 row-span-1">
          <img
            src={img4}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="col-span-1 row-span-1">
          <img
            src={img5}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryGrid;
