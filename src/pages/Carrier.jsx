import React, { useState } from "react";

const Carrier = () => {
  const [photo1Preview, setPhoto1Preview] = useState(null);
  const [photo2Preview, setPhoto2Preview] = useState(null);
  const [photo3Preview, setPhoto3Preview] = useState(null);

  const handleImagePreview = (e, setter) => {
    const file = e.target.files[0];
    if (file) {
      setter(URL.createObjectURL(file));
    }
  };
  return (
    <>
      <h1 className="text-center text-2xl font-bold text-gray-800 mt-10">
        ARTIST REGISTRATION FORM
      </h1>

      <form
        className="mx-auto mt-5 px-6 py-8 border rounded-lg shadow-md max-w-3xl bg-white"
        action="https://formsubmit.co/abfilmindia@gmail.com"
        method="POST"
        encType="multipart/form-data"
      >
        <section className="flex flex-col gap-6">
          {/* Personal Info */}
          <h2 className="text-xl font-semibold text-gray-700">
            Personal Information
          </h2>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
            />
            <select
              name="gender"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
            >
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="height"
              placeholder="Height (ft/in)"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
            />
            <input
              type="text"
              name="weight"
              placeholder="Weight (kg)"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
            />
            <input
              type="text"
              name="complexion"
              placeholder="Complexion"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="eye_color"
              placeholder="Eye Color"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
            />
            <input
              type="text"
              name="hair_color_type"
              placeholder="Hair Color & Type"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
            />
            <input
              type="text"
              name="languages"
              placeholder="Languages Known"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <select
              name="marital_status"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
            >
              <option value="">Marital Status</option>
              <option>Single</option>
              <option>Married</option>
              <option>Other</option>
            </select>
            <input
              type="text"
              name="mother_tongue"
              placeholder="Mother Tongue"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-700">
            Contact Details
          </h2>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
            />
            <input
              type="tel"
              name="alt_phone"
              placeholder="Alternate Number"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
            />
          </div>
          {/* Contact Info */}

          <textarea
            name="current_address"
            placeholder="Current Address"
            rows="2"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
          />
          <textarea
            name="permanent_address"
            placeholder="Permanent Address"
            rows="2"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
          />

          <h2 className="text-xl font-semibold text-gray-700">
            Social Media Handles
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="instagram"
              placeholder="Instagram"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
            />
            <input
              type="text"
              name="facebook"
              placeholder="Facebook"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="youtube"
              placeholder="YouTube"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
            />
            <input
              type="text"
              name="others"
              placeholder="Other Links"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
            />
          </div>

          {/* Professional */}
          <h2 className="text-xl font-semibold text-gray-700">
            Professional Details
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="occupation"
              placeholder="Occupation"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
            />
            <input
              type="number"
              name="experience"
              placeholder="Experience in Acting/Modeling (Years)"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="trained_from"
              placeholder="Trained From (Institute/Workshop)"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
            />
            <select
              name="availability"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
            >
              <option value="">Current Availability</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>As per Project</option>
            </select>
          </div>
          <textarea
            name="work_profile"
            placeholder="Work Profile (TV/Film/Web/Stage)"
            rows="3"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
          />

          <h2 className="text-xl font-semibold text-gray-700">
            Upload your Photographs
          </h2>
          <section className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Photo 1 */}
              <div className="flex flex-col items-start">
                <input
                  type="file"
                  name="photo1"
                  accept="image/*"
                  className="w-full text-sm"
                  required
                  onChange={(e) => handleImagePreview(e, setPhoto1Preview)}
                />
                {photo1Preview && (
                  <img
                    src={photo1Preview}
                    alt="Preview 1"
                    className="mt-2 w-40 h-40 object-cover rounded-md border"
                  />
                )}
              </div>

              <div className="flex flex-col items-start">
                <input
                  type="file"
                  name="photo2"
                  accept="image/*"
                  className="w-full text-sm"
                  required
                  onChange={(e) => handleImagePreview(e, setPhoto2Preview)}
                />
                {photo2Preview && (
                  <img
                    src={photo2Preview}
                    alt="Preview 2"
                    className="mt-2 w-40 h-40 object-cover rounded-md border"
                  />
                )}
              </div>
              <div className="flex flex-col items-start">
                <input
                  type="file"
                  name="photo3"
                  accept="image/*"
                  className="w-full text-sm"
                  required
                  onChange={(e) => handleImagePreview(e, setPhoto3Preview)}
                />
                {photo3Preview && (
                  <img
                    src={photo3Preview}
                    alt="Preview 3"
                    className="mt-2 w-40 h-40 object-cover rounded-md border"
                  />
                )}
              </div>
            </div>
            <input
              type="url"
              name="showreel"
              placeholder="Showreel Link (if any)"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 ring-black ring-offset-1"
            />
            <button
              type="submit"
              className="mt-6 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-300 cursor-pointer"
            >
              Submit
            </button>
          </section>
        </section>

        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://abfilms.vercel.app/contact"
        />
      </form>
    </>
  );
};

export default Carrier;
