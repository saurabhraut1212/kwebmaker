import React from "react";

const ImageComponent = ({ top, left, src }) => {
  return (
    <img
      src={src}
      alt="Service Image"
      className="absolute w-[385px] h-[385px]"
      style={{ top: `${top}px`, left: `${left}px` }}
    />
  );
};

const PaintOverlay = ({ top, left }) => {
  return (
    <div
      className="absolute w-[385px] h-[143px] bg-[#FFE71099]"
      style={{ top: `${top}px`, left: `${left}px` }}
    />
  );
};

const TextOverlay = ({ top, left, text }) => {
  return (
    <div
      className="absolute text-black font-semibold"
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      <span className="block h-[20px] text-[20px] leading-[20px] text-left">
        {text}
      </span>
    </div>
  );
};

const SmallTextOverlay = ({ top, left, text }) => {
  return (
    <div
      className="absolute text-black"
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      <span className="block text-[16px] leading-[20px]">{text}</span>
    </div>
  );
};

const ButtonOverlay = ({ top, left }) => {
  return (
    <button
      className="absolute w-[109px] h-[38px] bg-white rounded-[20px] text-[#FF9119] font-semibold"
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      Read Me
    </button>
  );
};

const Services = ({ services }) => {
  const images = [
    {
      top: 200,
      left: 80,
      src: "assets/img1.png",
      mainText: "Wall Painting",
      smallText: "This is service one description.",
    },
    {
      top: 200,
      left: 490,
      src: "assets/img3.png",
      mainText: "Water Solution",
      smallText: "This is service two description.",
    },
    {
      top: 200,
      left: 900,
      src: "assets/img2.png",
      mainText: "Painting",
      smallText: "This is service three description.",
    },
  ];

  return (
    <div className="relative w-full h-screen bg-white">
      <div className="absolute top-[20px] left-[80px]  h-[20px] text-[18px] font-medium text-black">
        {services?.homeServicesTitle}{" "}
      </div>

      <div className="absolute top-[50px] left-[80px] w-[426px] h-[20px] text-[30px] font-bold text-black">
        {services?.homeServicesSubtitle}{" "}
      </div>

      {images.map((img, index) => (
        <div key={index} className="relative">
          <ImageComponent src={img.src} top={img.top} left={img.left} />
          <PaintOverlay top={img.top + 240} left={img.left} />
          <TextOverlay
            top={img.top + 262}
            left={img.left + 20}
            text={img.mainText}
          />
          <SmallTextOverlay
            top={img.top + 290}
            left={img.left + 20}
            text={img.smallText}
          />
          <ButtonOverlay top={img.top + 320} left={img.left + 20} />
        </div>
      ))}
    </div>
  );
};

export default Services;
