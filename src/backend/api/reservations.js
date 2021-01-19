const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (_request, response) => {
  try {
    const reservations = await knex("reservations").select("*");
    response.json(reservations);
  } catch (error) {
    response.status(500).send();
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    const reservationsById = await knex("reservations")
      .select("*")
      .where({ id_reservations: id });
    response.send(reservationsById);
  } catch (error) {
    response.status(500).send();
    throw error;
  }
});

router.post("/", async ({ body }, response) => {
  try {
    const numberParsed = Number.parseInt(body.number_of_guests, 10);
    if (Number.isNaN(numberParsed)) {
      response.status(400).send({ message: "Bad client! Not a number." });
    }
    const meal_id = Number.parseInt(body.meal_id, 10);
    if (Number.isNaN(meal_id)) {
      response.status(400).send({ message: "Bad client! Not a number." });
    }

    const reservations = await knex("reservations").insert({
      number_of_guests: numberParsed,
      meal_id,
      created_date: new Date(body.created_date),
      contact_phonenumber: body.contact_phonenumber,
      contact_name: body.contact_name,
      contact_email: body.contact_email,
    });
    response.json(reservations);
  } catch (error) {
    response.status(500).send();
    throw error;
  }
});

module.exports = router;
