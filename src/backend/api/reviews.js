const express = require("express");
const router = express.Router();
const knex = require("../database");

// GET/api/reviews    : Returns all reviews
router.get("/", async (request, response) => {
  try {
    const reviews = await knex("reviews").select("*");
    response.json(reviews);
  } catch (error) {
    throw error;
  }
});

// api/reviews/	POST	Adds a new review	POST api/reviews/
router.post("/", async (request, response) => {
  try {
    const reviews = await knex("reviews").select("*");
    response.json(reviews);
  } catch (error) {
    throw error;
  }
});

// api/reviews/	POST	Adds a new review	POST api/reviews/   ----check
router.post("/", async (request, response) => {
  try {
    request.body.created_date = new Date();
    await knex("reviews").insert(request.body);
    const arrayWnewReview = await knex("reviews").select("*");
    response.json(arrayWnewReview);
  } catch (error) {
    throw error;
  }
});

// api/reviews/{id}	GET	Returns review by id	GET api/reviews/2
router.get("/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    const reviewByID = await knex("reviews").select("*").where({ id: id });
    response.send(reviewByID);
  } catch (error) {
    throw error;
  }
});

// api/reviews/{id}	PUT	Updates the review by id	PUT api/reviews/2
router.put("/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    await knex("reviews").where({ id: id }).update(request.body);
    const updatedReview = await knex("reviews").where({ id: id }).select("*");
    response.send(updatedReview);
    console.log(updatedReview);
  } catch (error) {
    throw error;
  }
});

// api/reviews/{id}	DELETE	Deletes the review by id	DELETE reviews/2
router.delete("/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    await knex("reviews").where({ id: id }).del();
    const arrayAfterDelete = await knex("reviews").select("*");
    response.send(arrayAfterDelete);
    console.log(arrayAfterDelete);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
