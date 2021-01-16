import React, { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export const ReviewsCarrousel = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      const respMeals = await fetch("http://localhost:5000/api/reviews");
      const jsonResponse = await respMeals.json();
      console.log(jsonResponse);
      setReviews(() => {
        return jsonResponse;
      });
    })();
  }, []);

  return (
    <div className="carouselContent">
      <h1 className="CarouselTitle">What people say</h1>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={150}
        totalSlides={reviews.length}
        isIntrinsicHeight={true}
        infinite={true}
      >
        <Slider>
          {reviews.map((review) => {
            return (
              <Slide index={review.reviews_id_reviews}>
                <div className="carouselReviews">
                  <h1>
                    {review.meals_title ? `Feast: ${review.meals_title}` : ""}
                  </h1>
                  <h2>
                    {review.reviews_title ? review.reviews_title : "review"}
                  </h2>
                  <p>
                    {review.reviews_stars
                      ? `${review.reviews_stars} ★ stars`
                      : "no stars"}{" "}
                  </p>
                  <p>
                    {review.reviews_description
                      ? review.reviews_description
                      : "no description"}{" "}
                  </p>
                  <p className="small-text">
                    {review.reviews_created_date
                      ? new Date(
                          review.reviews_created_date
                        ).toLocaleDateString("en-GB", { timeZone: "UTC" })
                      : "none"}{" "}
                  </p>
                </div>
              </Slide>
            );
          })}
        </Slider>

        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </div>
  );
};

export default ReviewsCarrousel;
