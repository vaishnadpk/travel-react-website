import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../Herosection";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
