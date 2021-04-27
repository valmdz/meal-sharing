import React from "react";
import ReviewsCarrousel from "../ReviewsCarrousel/ReviewsCarrousel";
import NextFeast from "../NextFeast/NextFeast";
import HomeImg from "../HomeImg/HomeImg";
import "./Home.css";

export const Home = ({ meals }) => {
  return (
    <>
      <section className="home">
        <HomeImg />
      </section>
      <div className="carousel">
        <NextFeast meals={meals} />
        <ReviewsCarrousel />
      </div>
    </>
  );
};

export default Home;
