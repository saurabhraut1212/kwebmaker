import React from "react";

const About = ({ aboutData }) => {
  return (
    <div className="w-screen h-screen bg-white flex flex-col md:flex-row">
      {/* Left Section: Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-8">
        {/* Heading 1: About Astral Paints */}
        <div className="font-poppins text-[18px] font-medium leading-[20px] text-left text-black mb-4">
          {aboutData?.homeAboutTitle}
        </div>

        {/* Heading 2: Bringing your dreams to life */}
        <div className="font-poppins text-[30px] font-bold leading-[20px] text-left text-black mb-8">
          {aboutData?.homeAboutSubtitle}
        </div>

        {/* Lorem Ipsum text */}
        <div className="bg-white text-left font-lato text-[16px] font-normal leading-[25px] text-black mb-4">
          {aboutData?.homeAboutDescription.replace(/<\/?[^>]+(>|$)/g, "")}
        </div>

        {/* Button */}
        <button className="w-full md:w-[109px] h-[38px] bg-white text-[#E70000] border border-[#E70000] rounded-[20px] flex items-center justify-center">
          {aboutData?.homeAboutButton.title}
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
        <img
          src="assets/pick.png"
          alt="Description of image"
          className="w-[580px] h-[540px] object-cover"
        />
      </div>
    </div>
  );
};

export default About;
