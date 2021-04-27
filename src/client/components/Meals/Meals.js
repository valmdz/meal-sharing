import React from "react";
import "./Meals.css";

export const Meals = ({ search, meals }) => {
  const filteredMeals = meals.filter((meal) =>
    meal.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="container-meals">
      <div>
        <h1 className="section-heading">Upcoming feasts</h1>
      </div>
      <div className="container">
        {filteredMeals.map((meal) => {
          return (
            <div className="meals" key={meal.id_meals}>
              <h3>{meal.title}</h3>
              <p>{meal.description ? meal.description : "none"} </p>
              <p>
                <span className="bold-text">When: </span>
                {meal.when ? new Date(meal.when).toString() : "none"}
              </p>
              <p>
                <span className="bold-text">Where: </span>
                {meal.location ? meal.location : "none"}
              </p>
              <p>
                <span className="bold-text">Signed up guests: </span>
                {meal.reservations_number_of_guests || meal.max_reservations
                  ? `${meal.reservations_number_of_guests} of ${meal.max_reservations}`
                  : "0"}
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
