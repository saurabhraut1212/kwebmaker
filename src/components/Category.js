import React from "react";

const ImageComponent = ({ top, left, src, alt, text }) => {
  return (
    <div className="absolute" style={{ top: `${top}px`, left: `${left}px` }}>
      <img src={src} alt={alt} className="w-[264.71px] h-[248.18px]" />
      <div className="absolute top-[169px] left-0 w-[144px] h-[20px] text-[20px] font-semibold text-left leading-[20px]">
        {text}
      </div>
    </div>
  );
};

const Category = ({ categories }) => {
  const images = [
    {
      top: 113,
      left: 732,
      src: "assets/exterior.png",
      alt: "Small Image 1",
      text: "exterior",
    },
    {
      top: 387,
      left: 732,
      src: "assets/undercoat.png",
      alt: "Small Image 2",
      text: "undercoat",
    },
    {
      top: 113,
      left: 1021,
      src: "assets/water.png",
      alt: "Small Image 3",
      text: "water",
    },
    {
      top: 387,
      left: 1021,
      src: "assets/painting.png",
      alt: "Small Image 4",
      text: "painting",
    },
  ];

  return (
    <div className="relative w-full h-screen bg-white ">
      <div className="absolute top-[20px] left-[81px] text-[18px] font-medium text-black">
        {categories?.homeCategoryTitle}
      </div>

      <div className="absolute top-[53px] left-[81px] text-[30px] font-bold text-black">
        {categories?.homeCategorySubtitle}
      </div>

      <img
        src="assets/pick2.png"
        alt="Main Image Description"
        className="absolute w-[622px] h-[522px] top-[113px] left-[81px]"
      />

      <div className="absolute w-[622px] h-[76px] top-[559px] left-[81px] bg-[#FF911999] flex items-center relative">
        <div className="w-[142px] text-[20px] font-semibold leading-[20px] left-[112px]">
          Interior Paints
        </div>

        <button className="absolute top-[19px] left-[493px] w-[109px] h-[38px] bg-white rounded-[20px] text-[#FF9119] font-semibold">
          Read Me
        </button>
      </div>

      {images.map((img, index) => (
        <ImageComponent
          key={index}
          src={img.src}
          alt={img.alt}
          top={img.top}
          left={img.left}
          text={img.text}
        />
      ))}
    </div>
  );
};

export default Category;
