import React, { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./ReviewsCarrousel.css";

export const ReviewsCarrousel = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      const respMeals = await fetch("/api/reviews");
      const jsonResponse = await respMeals.json();
      setReviews(() => {
        return jsonResponse;
      });
    })();
  }, []);

  return (
    <div className="carousel-content">
      <h1 className="carousel-title">What people say about our events</h1>
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
              <Slide
                index={review.reviews_id_reviews}
                key={review.reviews_title.replace(/ /g, "_")}
              >
                <div className="carousel-reviews">
                  <p>About the feast: </p>
                  <h1>{review.meals_title ? review.meals_title : ""}</h1>
                  <h2>
                    {review.reviews_title ? review.reviews_title : "review"}
                  </h2>
                  <p>
                    {review.reviews_stars
                      ? `${review.reviews_stars} ★ stars`
                      : "no stars"}{" "}
                  </p>
                  <p>
                    "
                    {review.reviews_description
                      ? review.reviews_description
                      : "no description"}
                    "{" "}
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

        <ButtonBack>{`◄ Back`}</ButtonBack>
        <ButtonNext>{`Next ►`}</ButtonNext>
      </CarouselProvider>
    </div>
  );
};

export default ReviewsCarrousel;
