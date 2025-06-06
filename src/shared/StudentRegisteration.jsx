import React from "react";

const StudentRegistrationForm = () => {
    return (
        <div >
            <h3 className="text-3xl text-center font-bold text-gray-900">Artist Registration Form</h3>
      <form
        className="space-y-4 max-w-xl mx-auto mt-6"
        action="https://formsubmit.co/abfilmindia@gmail.com"
        method="POST"
      >
        <input type="text" name="name" placeholder="Full Name" className="w-full p-2 border rounded" required />
        <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded" required />
        <input type="tel" name="phone" placeholder="Phone Number" className="w-full p-2 border rounded" required />
        <select name="course" className="w-full p-2 border rounded" required>
          <option value="">Select Field</option>
          <option>Acting</option>
          <option>Direction</option>
          <option>Editing</option>
          <option>Cinematography</option>
          <option>Screenwriting</option>
          <option>Singer</option>
          <option>Dancer</option>
          <option>Makeup</option>
             <option>Editor</option>
          <option>Artist</option>
          <option>Costume </option>
          <option>Designer</option>
          <option>Sound </option>
          <option>Engineer</option>
          <option>Choreographer</option>
          <option>Art Director</option>
                <option>Visual Effects Artist</option>
          <option>Production</option>
          <option>Stunt  </option>
          <option>Coordinator</option>
          <option>Lighting Technician </option>
          <option>Music Composer</option>
          <option>Lyricist</option>
          <option>Set Designer</option>
            <option>Assistant Director</option>
        </select>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://abfilms.vercel.app/about" />
  
        <button type="submit" className="cursor-pointer px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
          Submit
        </button>
      </form>
      </div>
    );
  };
  
export default StudentRegistrationForm;
