const { response } = require("express");
const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (_request, response) => {
  try {
    const sql = `Select *
    FROM meals
    JOIN (SELECT 
        meals.id_meals as meals_id_meals,
        SUM(COALESCE(reservations.number_of_guests, 0)) as reservations_number_of_guests
        FROM meals
        LEFT JOIN reservations ON meals.id_meals = reservations.meal_id
        GROUP BY id_meals) as sum_of_guests on meals.id_meals = sum_of_guests.meals_id_meals`;
    const [meals] = await knex.schema.raw(sql);
    response.json(meals);
  } catch (error) {
    throw error;
  }
});

router.post("/", async ({ body }, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    console.log(body);
    const max_reservations = Number.parseInt(body.max_reservations, 10);
    if (Number.isNaN(max_reservations)) {
      response.status(400).send({ message: "Bad client! Not a number." });
    }
    const meals = await knex("meals").insert({
      title: body.title,
      description: body.description,
      max_reservations: max_reservations,
      created_date: new Date(body.created_date),
      when: body.when,
      location: body.location,
      price: body.price,
    });
    response.json(meals);
  } catch (error) {
    response.status(500).send();
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    const MealById = await knex("meals").select("*").where({ id_meals: id });
    response.send(MealById);
  } catch (error) {
    response.status(500).send();
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    await knex("meals").where({ id: id }).update(request.body);
    const updatedMeal = await knex("meals").where({ id_meals: id }).select("*");
    response.send(updatedMeal);
    console.log(updatedMeal);
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    await knex("meals").where({ meal_id: id }).del();
    const mealsAfterDelete = await knex("meals").select("*");
    response.send(mealsAfterDelete);
  } catch (error) {
    response.status(500).send();
    throw error;
  }
});

module.exports = router;
