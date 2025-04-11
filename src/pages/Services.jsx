import {
    FaFilm,
    FaBullhorn,
    FaCameraRetro,
    FaUserTie,
    FaMicrophone,
    FaChalkboardTeacher,
    FaUsers,
    FaPenNib,
    FaMagic,
    FaRegCalendarAlt,
    FaPaintBrush,
    FaTheaterMasks,
  } from "react-icons/fa";
  
  const services = [
    { icon: <FaFilm />, title: "Film Production" },
    { icon: <FaTheaterMasks />, title: "Film Distribution" },
    { icon: <FaBullhorn />, title: "Ad Film Making" },
    { icon: <FaUserTie />, title: "Biographical Films" },
    { icon: <FaTheaterMasks />, title: "Documentary Films" },
    { icon: <FaCameraRetro />, title: "Photography & Videography" },
    { icon: <FaBullhorn />, title: "Promotion & Marketing" },
    { icon: <FaMicrophone />, title: "Audio Production" },
    { icon: <FaChalkboardTeacher />, title: "Workshops & Training" },
    { icon: <FaUsers />, title: "Event Management" },
    { icon: <FaPenNib />, title: "Content Development" },
    { icon: <FaMagic />, title: "CGI, VFX & Post Production" },
    { icon: <FaRegCalendarAlt />, title: "Film Festival Event" },
    { icon: <FaPaintBrush />, title: "Literature & Art" },
  ];
  
  const ServicesPage = () => {
    return (
      <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12 uppercase">
          Our Services
        </h1>
  
        <div className="flex flex-wrap justify-center sm:justify-center  gap-6 sm:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-[300px] bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="text-purple-600 text-4xl mb-4">{service.icon}</div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                {service.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  
  export default ServicesPage;
  