import React from "react";
import { contactPhoto } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-6 lg:px-10">
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center lg:flex-row gap-10 mb-10 text-sm items-center">
        <img
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md rounded-lg shadow-md"
          src={contactPhoto}
          alt="Contact"
        />

        <div className="flex flex-col gap-6 justify-center text-center lg:text-left max-w-lg">
          <p className="font-semibold text-gray-600 text-lg">OUR OFFICE</p>
          <p className="text-gray-600">
            Hanumant Residency Appt <br />
            Flat No B-702, 6th Floor <br />
            Shimla Bypass Road, Pithuwala <br />
            Dehradun, Uttarakhand - 247181
          </p>
          <p className="text-gray-600 text-md font-bold">
            Devesh Aadmi <br />
            <span>
              Writer, Concept Creator <br />
              Tel: +91 8433121361
            </span>
          </p>
          <p className="text-gray-600 text-md font-bold">
            Kishan Bagoht <br />
            <span>
              Writer & Director <br />
              Tel: +91 8938840366
            </span>
          </p>
          <p className="text-gray-600">Email: abfilmindia@gmail.com</p>
          <p className="text-gray-600">
            Learn more about our teams and services
          </p>
          <button
            className="cursor-pointer border border-gray-700 text-gray-700 px-6 py-2 mt-2 rounded-md hover:bg-black hover:text-white transition duration-300 mx-auto lg:mx-0"
            onClick={() => navigate("/services")}
          >
            Explore Services
          </button>
        </div>
      </div>
      <h1 className="text-2xl font-semibold text-gray-700 text-center">
        Reach us{" "}
      </h1>
      <form
  className="mx-auto mt-5 px-4 py-6 border rounded-md shadow-md max-w-md bg-white"
  action="https://formsubmit.co/abfilmindia@gmail.com"
  method="POST"
>
  <div className="flex flex-col gap-4">
    <h2 className="text-xl font-semibold text-gray-700 text-center">
      Send us a message
    </h2>

    <div>
      <label className="text-gray-700 font-medium">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        required
      />
    </div>

    <div>
      <label className="text-gray-700 font-medium">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        required
      />
    </div>

    <div>
      <label className="text-gray-700 font-medium">Subject</label>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        required
      />
    </div>

    <div>
      <label className="text-gray-700 font-medium">Message</label>
      <textarea
        name="message"
        placeholder="Write your message..."
        rows="4"
        className="mt-1 w-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
        required
      ></textarea>
    </div>

    <button
      type="submit"
      className="mt-4 cursor-pointer bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300"
    >
      Submit
    </button>
  </div>

  <input type="hidden" name="_captcha" value="false" />

  <input type="hidden" name="_next" value="https://abfilms.vercel.app/contact" />
</form>

      <div className="w-full flex justify-center mb-28 mt-15">
        <iframe
          title="Hanumant Residency Location"
          src="https://www.google.com/maps?q=Hanumant+Residency,+Shimla+Bypass+Rd,+Seema+Dwar,+Pitthuwala,+Dehradun,+Uttarakhand+248146&output=embed"
          className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] max-w-6xl rounded-xl shadow-lg border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
