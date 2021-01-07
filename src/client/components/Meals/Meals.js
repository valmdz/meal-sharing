/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import "./testComponentStyle.css";
// import { get } from "../../../backend/api/meals";
// import knex from "../../../backend/database";

export const Meals = (Reviews) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    (async () => {
      const respMeals = await fetch("http://localhost:5000/api/meals");
      const jsonResponse = await respMeals.json();
      console.log(jsonResponse);
      setMeals((prev) => {
        return jsonResponse;
      });
    })();
  }, []);


  return (
    <section class="container-meals">
      <div>
        <h1 class="section-heading">Upcoming feasts</h1>
      </div>
      <div class="container">
        {meals.map((meal) => {
          console.log(new Date(meal.when).toLocaleDateString("ko-KR"));
          return (
            <div className="meals">
              <h3>{meal.title}</h3>
              <p>{meal.description ? meal.description : "none"} </p>
              <p><span class='bold-text'>When:</span> {meal.when ? meal.when : "none"} </p>
              <p><span class='bold-text'>Where:</span> {meal.location ? meal.location : "none"} </p>
              <p>
              <span class='bold-text'>Capacity:</span>{" "}
                {meal.max_reservations ? `${meal.max_reservations} persons`: "none"}
              </p>
              <p>※</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Meals;
