const express = require("express");
const router = express.Router();
const knex = require("../database");

// GET/api/reservations    : Returns all reservations
router.get("/", async (request, response) => {
  try {
    const reservations = await knex("reservations").select("*");
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});

// api/reservations/	POST	Adds a new reservation	POST api/reservations/
router.post("/", async (request, response) => {
  try {
    const reservations = await knex("reservations").select("*");
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});

// api/reservations/	POST	Adds a new reservation	POST api/reservations/   ----check
router.post("/", async (request, response) => {
  try {
    request.body.created_date = new Date();
    await knex("reservations").insert(request.body);
    const arrayWnewReservation = await knex("reservations").select("*");
    response.json(arrayWnewReservation);
  } catch (error) {
    throw error;
  }
});

// api/reservations/{id}	GET	Returns Reservation by id	GET api/reservations/2
router.get("/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    const reservationByID = await knex("reservations")
      .select("*")
      .where({ id: id });
    response.send(reservationByID);
  } catch (error) {
    throw error;
  }
});

// api/reservations/{id}	PUT	Updates the Reservation by id	PUT api/reservations/2
router.put("/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    await knex("reservations").where({ id: id }).update(request.body);
    const updatedReservation = await knex("reservations")
      .where({ id: id })
      .select("*");
    response.send(updatedReservation);
    console.log(updatedReservation);
  } catch (error) {
    throw error;
  }
});

// api/reservations/{id}	DELETE	Deletes the Reservation by id	DELETE reservations/2
router.delete("/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    await knex("reservations").where({ id: id }).del();
    const arrayAfterDelete = await knex("reservations").select("*");
    response.send(arrayAfterDelete);
    console.log(arrayAfterDelete);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
