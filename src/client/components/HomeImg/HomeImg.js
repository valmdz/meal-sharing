import React from "react";
import "./HomeImg.css";

const HomeImg = () => {
  return (
    <div className="home-intro">
      <h1>Because food is better when shared</h1>
      <img
        className="home-img"
        src="https://upload.wikimedia.org/wikipedia/commons/2/28/Hipp_hipp_hurra%21_Konstn%C3%A4rsfest_p%C3%A5_Skagen_-_Peder_Severin_Kr%C3%B8yer.jpg"
        alt="Hipp hipp hurra! Konstnärsfest på Skagen by Peder Severin Krøyer"
      ></img>
    </div>
  );
};

export default HomeImg;
