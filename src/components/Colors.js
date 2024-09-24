import React, { useState } from "react";


const ColorBox = ({
  top,
  left,
  background,
  colorCode,
  colorName,
  isSelected,
  onClick,
}) => {
  return (
    <div className="relative">
      <div
        className={`absolute w-[190px] h-[158px] transition-shadow duration-300`}
        style={{
          top: `${top - 10}px`,
          left: `${left}px`,
          background: "transparent",
          boxShadow: isSelected
            ? "0px 10px 20px 0px rgba(0, 0, 0, 0.30)"
            : "none",
          border: "1px solid transparent",
        }}
      />
      <div
        className={`absolute w-[190px] h-[158px] border border-white transition-shadow duration-300`}
        style={{
          top: `${top}px`,
          left: `${left}px`,
          background: background,
        }}
        onClick={onClick}
      />
      <div
        className={`absolute text-black text-center transition-shadow duration-300`}
        style={{
          top: `${top + 158}px`,
          left: `${left}px`,
          width: "190px",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: isSelected
            ? "0px 10px 20px 0px rgba(0, 0, 0, 0.30)"
            : "none",
        }}
      >
        <div className="font-semibold">{colorName}</div>
        <div>{colorCode}</div>
      </div>
    </div>
  );
};

const Colors = ({ colors }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const colorData = [
    {
      top: 200,
      left: 80,
      background: "#FAE0B2",
      code: "#FAE0B2",
      name: "Light Apricot",
    },
    {
      top: 200,
      left: 280,
      background: "#FBC9C3",
      code: "#FBC9C3",
      name: "Light Pink",
    },
    {
      top: 200,
      left: 480,
      background: "#00C1DE",
      code: "#00C1DE",
      name: "Sky Blue",
    },
    {
      top: 200,
      left: 680,
      background: "#0060AF",
      code: "#0060AF",
      name: "Dark Blue",
    },
    {
      top: 200,
      left: 880,
      background: "#800404",
      code: "#800404",
      name: "Dark Red",
    },
    {
      top: 200,
      left: 1080,
      background: "#ECA628",
      code: "#ECA628",
      name: "Golden Yellow",
    },
  ];

  return (
    <div className="relative w-full h-screen bg-white">
      <div className="absolute top-[20px] left-[80px] text-[18px] font-medium text-black">
        {colors?.homeColoursTitle}{" "}
      </div>

      <div className="absolute top-[50px] left-[80px] text-[30px] font-bold text-black">
        {colors?.homeColoursSubtitle}
      </div>

      {colorData.map((color, index) => (
        <ColorBox
          key={index}
          top={color.top}
          left={color.left}
          background={color.background}
          colorCode={color.code}
          colorName={color.name}
          isSelected={selectedIndex === index}
          onClick={() => setSelectedIndex(index)}
        />
      ))}

      <div
        className="absolute top-[500px] left-0 w-full"
        style={{
          height: "428.92px",
          backgroundImage: "url(assets/background.png)", // Change this to the path of your image
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          padding: "20px",
        }}
      >
        <div className="font-poppins text-[18px] font-medium leading-[20px] text-left mb-2">
          {colors?.homeJoinTitle}{" "}
        </div>
        <div className="font-poppins text-[30px] font-bold leading-[20px] text-left mb-2">
          {colors?.homeJoinSubtitle}{" "}
        </div>
        <div className="font-lato text-[16px] font-normal leading-[25px] text-center mt-2 mb-5">
          {colors?.homeJoinDescription}{" "}
        </div>
        <button className="w-[109px] h-[38px] bg-white rounded-[20px] text-[#FF9119] font-semibold">
          {colors?.homeJoinButton?.title}
        </button>
      </div>
    </div>
  );
};

export default Colors;
