import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mt-15 flex items-center justify-center gap-5">
        <p
          className="cursor-pointer underline"
          onClick={() => {
            navigate("/");
            scrollTo(0, 0);
          }}
        >
          Home
        </p>
        <p
          className="cursor-pointer underline"
          onClick={() => {
            navigate("/services");
            scrollTo(0, 0);
          }}
        >
          Services
        </p>
        <p
          className="cursor-pointer underline"
          onClick={() => {
            navigate("/films");
            scrollTo(0, 0);
          }}
        >
          Our Clients
        </p>
        <p
          className="cursor-pointer underline"
          onClick={() => {
            navigate("/contact");
            scrollTo(0, 0);
          }}
        >
          Contact
        </p>
      </div>
      <div className="flex items-center justify-center">
        <p>© 2025 AB Film Production</p>
      </div>
      <div className="flex items-center justify-center gap-1 mt-5 mb-20">
  <a href="https://www.instagram.com/abfilmindia" target="_blank" rel="noopener noreferrer">
    <FaInstagramSquare className="text-4xl cursor-pointer text-pink-600" />
  </a>

  <a href="https://wa.me/918433121361" target="_blank" rel="noopener noreferrer">
    <FaWhatsappSquare className="text-4xl cursor-pointer text-green-600" />
  </a>

  <a href="https://twitter.com/abfilmindia2239" target="_blank" rel="noopener noreferrer">
    <FaSquareXTwitter className="text-4xl cursor-pointer text-black" />
  </a>

  <a href="https://www.youtube.com/@abfilmindia" target="_blank" rel="noopener noreferrer">
    <FaYoutubeSquare className="text-4xl cursor-pointer text-red-600" />
  </a>

  <a href="tel:+918433121361">
    <FaPhoneSquare className="text-4xl cursor-pointer text-blue-600" />
  </a>

  <a href="https://www.facebook.com/share/1XnKGMVFH9/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
    <FaFacebookSquare className="text-4xl cursor-pointer text-blue-700" />
  </a>

  <a href="mailto:abfilmindia@gmail.com?subject=Artist%20Registration&body=Hi%20ABfilm,%20I%20want%20to%20join...">
    <ImMail className="text-[2.1rem] cursor-pointer text-red-500" />
  </a>
</div>

    </div>
  );
};

export default Footer;
