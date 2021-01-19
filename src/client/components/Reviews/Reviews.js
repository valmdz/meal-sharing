import React, { useState, useEffect } from "react";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      const respMeals = await fetch("/api/reviews");
      const jsonResponse = await respMeals.json();
      setReviews((prev) => {
        return jsonResponse;
      });
    })();
  }, []);

  return (
    <section className="container-meals">
      <div>
        <h1 className="section-heading">Reviews</h1>
      </div>
      <div className="container">
        {reviews.map((review) => {
          return (
            <div className="meals">
      
              <h3>{review.reviews_title ? review.reviews_title : "review"}</h3>
              <h4>
                {review.meals_title ? `on: ${review.meals_title}` : ""}
              </h4>
              <p>
                {review.reviews_stars
                  ? `${review.reviews_stars}★ stars`
                  : "none"}{" "}
              </p>
              <p>
                {review.reviews_description
                  ? review.reviews_description
                  : "none"}{" "}
              </p>
              <p className="small-text">
                {review.reviews_created_date
                  ? new Date(
                      review.reviews_created_date
                    ).toLocaleDateString("en-GB", { timeZone: "UTC" })
                  : "none"}
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
