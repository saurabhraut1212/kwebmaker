import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const logos = [
    { src: "/assets/image 15.png", alt: "Astral Pipes" },
    { src: "/assets/image 16.png", alt: "Astral Adhesives" },
    { src: "/assets/image 17.png", alt: "BondIt" },
    { src: "/assets/image 18.png", alt: "Astral Bathware" },
    { src: "/assets/image 19.png", alt: "Gem Paints" },
  ];

  return (
    <footer
      className="bg-darkBlue text-white py-10 px-20"
      style={{
        backgroundImage: "url(assets/footer.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {" "}
      <div className="w-full mx-auto">
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <div>
            <p className="font-poppins text-2xl font-bold leading-5 text-left mb-[68px]">
              Group Company
            </p>
          </div>{" "}
          <div className="flex justify-between items-center w-3/4">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="w-[160px] h-[64px]"
              />
            ))}
          </div>
          <hr className="w-full my-12 border-t border-gray-300" />
          <div className="flex items-start justify-between w-full">
            <div className="mt-6">
              <img
                src="/assets/Astral-Paints-Logo.png"
                alt="Astral Paints"
                className="w-[200px] h-[64px]"
              />
            </div>
            <div className="flex mt-6 w-2/3 justify-between items-center space-x-4">
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  Sign Up To Our Newsletter
                </h4>
                <p className="font-light text-sm">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
              <div className="flex w-2/3">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="p-3 border border-gray-300 rounded-full focus:outline-none w-3/4"
                />
                <button className="bg-[#0060AF] text-white p-3 rounded-full -ml-16">
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="w-full flex flex-col md:flex-row justify-between my-16">
          <div className="flex flex-col space-y-4 md:w-1/3">
            <span className="font-light">Reach Us</span>
            <span className="font-light space-y-1">
              <p>#417/418, 11th Cross, 4th Phase, Peenya Industrial Area,</p>

              <p>Bangalore - 560 058</p>
            </span>
            <span className="font-light">+91 - 80 - 42552555</span>
            <a href="mailto:info@gem-paints.com" className="font-light">
              info@gem-paints.com
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:w-2/3">
            <div>
              <h4 className="text-base font-semibold mb-4">About</h4>
              <ul className="font-light space-y-1">
                <li>About Astrals</li>
                <li>Paint Journey</li>
                <li>Group Companies</li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-semibold mb-4">Category</h4>
              <ul className="font-light space-y-1">
                <li>Interior Paints</li>
                <li>Exterior Paints</li>
                <li>Undercoats</li>
                <li>Painting Tools</li>
                <li>Water Proofing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-semibold mb-4">Services</h4>
              <ul className="font-light space-y-1">
                <li>Wall Painting</li>
                <li>Water Solution</li>
                <li>Colour Shades</li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-semibold mb-4">Downloads</h4>
              <ul className="font-light space-y-1">
                <li>Become A Dealer</li>
                <li>Blogs</li>
                <li>Contact</li>
              </ul>
              <div className="flex mt-4 space-x-2">
                <div className="border border-gray-300 rounded-full p-2">
                  <FaFacebookF className="text-xl" />
                </div>
                <div className="border border-gray-300 rounded-full p-2">
                  <FaInstagram className="text-xl" />
                </div>
                <div className="border border-gray-300 rounded-full p-2">
                  <FaTwitter className="text-xl" />
                </div>
                <div className="border border-gray-300 rounded-full p-2">
                  <FaYoutube className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
