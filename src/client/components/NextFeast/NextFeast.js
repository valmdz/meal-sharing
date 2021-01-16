import React, { useEffect, useState } from "react";

export const NextFeast = ({ search }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    (async () => {
      const respMeals = await fetch("http://localhost:5000/api/meals");
      const jsonResponse = await respMeals.json();
      setMeals(() => {
        return jsonResponse;
      });
    })();
  }, []);

  const now = new Date();

  const earliestNextMeal = meals
    .map((meal) => ({ ...meal, when: new Date(meal.when) }))
    .sort((a, b) => a.when - b.when)
    .find(({ when }) => now <= when);

  return (
    <section className="container-meals">
      <div>
        <h1 className="section-heading">Upcoming feast</h1>
      </div>
    </section>
  );
};

export default NextFeast;
