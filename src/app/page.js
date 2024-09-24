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
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_HOMEPAGE_DATA);
  console.log(data, "data");

  // Create refs for each section
  const mainPageRef = useRef(null);
  const aboutRef = useRef(null);
  const categoryRef = useRef(null);
  const servicesRef = useRef(null);
  const colorsRef = useRef(null);
  const blogsRef = useRef(null);
  const footerRef = useRef(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { homepage } = data.pages.nodes[0];
  console.log(data, "homepage");

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
            case "Blogs":
              handleScroll(blogsRef);
              break;
            case "Footer":
              handleScroll(footerRef);
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
      <div ref={blogsRef}>
        <Blogs blogs={data.blogs.nodes} />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
