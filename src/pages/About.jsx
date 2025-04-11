import React from "react";
import Institute from "../shared/Institue";
import Work from "../shared/Work";
import Team from "../shared/Team";
import Bio from "../shared/Bio";
import StudentRegistrationForm from "../shared/StudentRegisteration";


const About = () => {
  return (
    <div className="p-6 space-y-10">
      <Bio/>
      <Institute />
      <Work />
      <Team />
    <StudentRegistrationForm />
    </div>

  );
};

export default About;
