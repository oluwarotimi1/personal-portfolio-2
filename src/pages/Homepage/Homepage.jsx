import React from "react";
import Hero from "../../components/Hero/Hero";
import People from "../../components/People/People";
import Portfolio from "../../components/Portfolio/Portfolio";
import Work from "../../components/Work/Work";
import Experties from "../../components/Experties/Experties";
import Header from "../../components/Header/Header";

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Experties />
      <Work />
      <Portfolio />
      <People />
    </>
  );
};

export default Homepage;
