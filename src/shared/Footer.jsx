import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
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
          onClick={() => {navigate("/about"); scrollTo(0,0)}}
        >
          About
        </p>
        <p className="cursor-pointer underline" onClick={() => {navigate("/services"); scrollTo(0,0)}}>
          Services
        </p>
        <p
          className="cursor-pointer underline"
          onClick={() =>{ navigate("/films"); scrollTo(0,0)}}
        >
          All Films
        </p>
        <p
          className="cursor-pointer underline"
          onClick={() => {navigate("/contact"); scrollTo(0,0)}}
        >
          Contact
        </p>
      </div>
      <div className="flex items-center justify-center">
        <p>© 2025 AB Film Production</p>
      </div>
        <div className="flex items-center justify-center gap-1 mt-5 mb-20">
          <FaInstagramSquare className="text-4xl cursor-pointer" />
          <FaWhatsappSquare className="text-4xl cursor-pointer" />
          <FaTwitterSquare className="text-4xl cursor-pointer" />
          <FaYoutubeSquare className="text-4xl cursor-pointer" />
          <FaPhoneSquare className="text-4xl cursor-pointer"/>
<FaFacebookSquare className="text-4xl cursor-pointer"/>
<ImMail className="text-[2.1rem] cursor-pointer" />
        </div>
     
    </div>
  );
};

export default Footer;
