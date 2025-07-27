import React from "react";
import SectionTitle from "../atoms/SectionTitle";
import SectionFrame1 from "../atoms/SectionFrame1";
import AboutImage from "../atoms/AboutImage";
import AboutTexts from "../atoms/AboutTexts";

const About: React.FC = () => {
  return (
    <SectionFrame1>
      <SectionTitle>About Us</SectionTitle>
      <div className="flex flex-col gap-[30px] items-center w-full">
        <AboutImage />
        <AboutTexts />
      </div>
    </SectionFrame1>
  );
};

export default About;
