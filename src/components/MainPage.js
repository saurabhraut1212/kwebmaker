import React from "react";

const MainPage = ({ homepage }) => {
  return (
    <div
      className="bg-cover bg-center w-screen h-screen relative"
      style={{ backgroundImage: `url(/assets/Home.png)` }}
    >
      <div className="absolute w-[265px] h-[110px] top-[266px] left-[80px] font-poppins text-[50px] font-bold leading-[55px] text-left text-white">
        {homepage[0].bannersTitle}
      </div>
      <div className="absolute w-[305px] h-[20px] top-[392px] left-[80px] font-lato text-[16px] font-normal leading-[20px] text-left text-white">
        {homepage[0].bannerDescription}
      </div>
      <div className="absolute w-[109px] h-[38px] top-[435px] left-[80px] rounded-[20px] bg-white text-[#0060AF] flex items-center justify-center font-poppins text-[14px] font-semibold text-center">
        {homepage[0].bannerButton.title}
      </div>
    </div>
  );
};

export default MainPage;
