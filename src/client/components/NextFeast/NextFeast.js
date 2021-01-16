import React from "react";

/* If there is an upcomming meal it is rendered, otherwise a message saying that there is no upcomming feast is rendered. */
const NextFeastAux = ({ value }) => {
  if (value === undefined) {
    return <p>No upcomming feasts</p>;
  }
  return (
    <div>
      There is a next feast, yay.
      <p>{value.title}</p>
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
      <h1 className="section-heading">Upcoming feast</h1>

      <NextFeastAux value={earliestNextMeal} />
    </section>
  );
};

export default NextFeast;
