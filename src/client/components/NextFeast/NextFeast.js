import React from "react";

const NextFeastAux = ({ value }) => {
  if (value === undefined) {
    return (
      <div>
        <h1 className="upcomingTitle">Upcoming feast</h1>
        <p>No upcomming feasts</p>
      </div>
    );
  }
  return (
    <div class="upcomingContainer">
      <div class="upcomingFeast">
        <h1>
          <span className="bold-text">Feast: </span>
          {value.title}
        </h1>
        <h2>
          <span className="bold-text">Description: </span> {value.description}
        </h2>
        <h3>
          <span className="bold-text">Capacity: </span> {value.max_reservations}
        </h3>
        <h3>
          <span className="bold-text">Price: </span> {value.price} DKK
        </h3>
        <h3>
          <span className="bold-text">When: </span>{" "}
          {new Date(value.when).toLocaleDateString("en-GB", {
            timeZone: "UTC",
          })}
        </h3>
        <h3>
          <span className="bold-text">Where: </span> {value.location}
        </h3>
      </div>
      <div>
        <h1 className="upcomingTitle">Upcoming feast</h1>
        <button>Make a reservation!</button>
      </div>
    </div>
  );
};

export const NextFeast = ({ meals }) => {
  const now = new Date();

  const earliestNextMeal = meals
    .map((meal) => ({ ...meal, when: new Date(meal.when) }))
    .sort((a, b) => a.when - b.when)
    .find(({ when }) => now <= when);

  return (
    <section className="container-meals">
      <NextFeastAux value={earliestNextMeal} />
    </section>
  );
};

export default NextFeast;
