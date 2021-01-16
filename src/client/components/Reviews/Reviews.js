import React, { useState, useEffect } from "react";

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

  return (
    <section className="container-meals">
      <div>
        <h1 className="section-heading">Reviews</h1>
      </div>
      <div className="container">
        {reviews.map((review) => {
          return (
            <div className="meals">
              <h3>{review.title ? review.title : "review"}</h3>
              <p>{review.stars ? `${review.stars}★ stars` : "none"} </p>
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
