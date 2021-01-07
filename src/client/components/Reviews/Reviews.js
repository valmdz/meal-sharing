/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      const respMeals = await fetch("http://localhost:5000/api/reviews");
      const jsonResponse = await respMeals.json();
      console.log(jsonResponse);
      setReviews((prev) => {
        return jsonResponse;
      });
    })();
  }, []);

  // const [meals, setMeals] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const respMe = await fetch("http://localhost:5000/api/meals");
  //     const jsonMeals = await respMe.json();
  //     console.log(jsonMeals);
  //     setMeals((prev) => {
  //       return jsonMeals;
  //     });
  //   })();
  // }, []);

  // const mealsWithReviews = meals.map((meal) => {
  //   meal.reviews = {rev: reviews.filter((review) => review.meal_id === meal.id_meal)};
  //   return meal;
  // });

  return (
    <section class="container-meals">
      <div>
        <h1 class="section-heading">Reviews</h1>
      </div>
      <div class="container">
        {reviews.map((review) => {
          return (
            <div className="meals">
              <h3>{review.title ? review.title : "review"}</h3>
              <p>{review.stars ? `${review.stars} stars` : "none"} </p>
              <p>{review.description ? review.description : "none"} </p>
              <p className="small-text">
                {review.created_date ? review.created_date : "none"}{" "}
              </p>
              <p>※</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Reviews;
