import React from "react";
import CarouselComponent from "../components/Home/Carousel";
import Information from "../components/Home/Information";
import MoreInfo from "../components/Home/MoreInfo";
import Courses from "../components/Home/Courses";
import FAQ from "../components/Home/FAQ";

function Home() {
  return (
    <main>
      <CarouselComponent />
      <Information />
      <MoreInfo />
      <Courses />
      <FAQ />
    </main>
  );
}

export default Home;
