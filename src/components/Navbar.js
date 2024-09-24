import React from 'react';

const Navbar = ({ onScrollToSection }) => {
  return (
    <nav className="w-full h-[100px] bg-[#0060AF] flex justify-between">
      <div className="relative" style={{ left: '80px', top: '28px' }}>
        <img 
          src="assets/logo.svg" 
          alt="Logo" 
          className="w-[150px] h-[47.55px]" 
        />
      </div>
      <div className="flex space-x-16 absolute" style={{ left: '388px', top: '39px' }}>
        {['MainPage', 'About', 'Category', 'Services', 'Colors','Blogs','Footer'].map((section) => (
          <button 
            key={section} 
            onClick={() => onScrollToSection(section)}
            className="text-white font-poppins font-semibold text-[14px] leading-[21px] cursor-pointer"
          >
            {section}
          </button>
        ))}
      </div>
      <div className="absolute" style={{ left: '1300px', top: '30px' }}>
        <button 
          className="w-[109px] h-[38px] bg-white text-[#0060AF] font-poppins font-semibold text-[12px] leading-[10px] rounded-[20px]"
        >
          Enquire Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
