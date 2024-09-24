"use client";

import { useQuery } from "@apollo/client";
import { useRef } from "react";
import { GET_HOMEPAGE_DATA } from "../../lib/queries";
import Navbar from "../components/Navbar";
import MainPage from "../components/MainPage";
import About from "../components/About";
import Category from "../components/Category";
import Services from "../components/Services";
import Colors from "../components/Colors";

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_HOMEPAGE_DATA);
  console.log(data, "data");

  // Create refs for each section
  const mainPageRef = useRef(null);
  const aboutRef = useRef(null);
  const categoryRef = useRef(null);
  const servicesRef = useRef(null);
  const colorsRef = useRef(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { homepage } = data.pages.nodes[0];
  console.log(homepage, "homepage");

  // Scroll to a specific section
  const handleScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <Navbar
        onScrollToSection={(section) => {
          switch (section) {
            case "MainPage":
              handleScroll(mainPageRef);
              break;
            case "About":
              handleScroll(aboutRef);
              break;
            case "Category":
              handleScroll(categoryRef);
              break;
            case "Services":
              handleScroll(servicesRef);
              break;
            case "Colors":
              handleScroll(colorsRef);
              break;
            default:
              break;
          }
        }}
      />
      <div ref={mainPageRef}>
        <MainPage homepage={homepage?.banners} />
      </div>
      <div ref={aboutRef}>
        <About aboutData={homepage} />
      </div>
      <div ref={categoryRef}>
        <Category categories={homepage} />
      </div>
      <div ref={servicesRef}>
        <Services services={homepage} />
      </div>
      <div ref={colorsRef}>
        <Colors colors={homepage} />
      </div>
    </div>
  );
};

export default HomePage;
