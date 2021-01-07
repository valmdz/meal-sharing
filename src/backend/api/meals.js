const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const meals = await knex("meals").select("*");
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

module.exports = router;
