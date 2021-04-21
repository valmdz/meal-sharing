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
        <h1 className="title">{value.title}</h1>
        <p>{value.description}</p>
        <p>
          <span className="bold-text">Capacity: </span> {value.max_reservations}{" "}
          feasters
        </p>
        <p>
          <span className="bold-text">Price: </span> {value.price} DKK
        </p>
        <p>
          <span className="bold-text">When: </span>{" "}
          {new Date(value.when).toLocaleDateString("en-GB", {
            timeZone: "UTC",
          })}
        </p>
        <p>
          <span className="bold-text">Where: </span> {value.location}
        </p>
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
