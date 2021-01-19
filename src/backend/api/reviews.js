const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (_request, response) => {
  try {
    const sql = `
SELECT
meals.id_meals as meals_id_meals,
meals.title as meals_title,
meals.description as meals_description,
meals.max_reservations as meals_max_reservations,
meals.created_date as meals_created_date,
meals.when as meals_when,
meals.location as meals_location,
meals.price as meals_price,
reviews.id_reviews as reviews_id_reviews,
reviews.title as reviews_title,
reviews.description as reviews_description,
reviews.meal_id as reviews_meal_id,
reviews.stars as reviews_stars,
reviews.created_date as reviews_created_date
FROM reviews
JOIN meals ON meal_id = meals.id_meals
`;
    const [reviews] = await knex.schema.raw(sql);
    response.json(reviews);
  } catch (error) {
    response.status(500).send();
    throw error;
  }
});

module.exports = router;
