import React from "react";
import ReviewsCarrousel from "../ReviewsCarrousel/ReviewsCarrousel";
import NextFeast from "../NextFeast/NextFeast";

export const Home = () => {
  return (
    <>
      <section className="home">
        <div className="home-intro">
          <h1>Because food is better when shared</h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/28/Hipp_hipp_hurra%21_Konstn%C3%A4rsfest_p%C3%A5_Skagen_-_Peder_Severin_Kr%C3%B8yer.jpg"
            alt="Hipp hipp hurra! Konstnärsfest på Skagen by Peder Severin Krøyer"
          ></img>
        </div>
      </section>
      <div className="carousel">
        <NextFeast></NextFeast>
        <ReviewsCarrousel />
      </div>
    </>
  );
};

export default Home;
