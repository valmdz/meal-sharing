const express = require("express");
const router = express.Router();
const knex = require("../database");

// Complementary functions
const mealsUnderMaxPrice = (request, meals) => {
  if (request.query.maxPrice === undefined) {
    return meals;
  }
  const maxPrice = parseInt(request.query.maxPrice);
  if (isNaN(maxPrice)) {
    return;
  }
  return meals.filter((meal) => meal.price < maxPrice);
};

const matchingTitles = (request, meals) => {
  if (request.query.title === undefined) {
    return meals;
  }
  return meals.filter((meal) =>
    meal.title.toLowerCase().includes(request.query.title.toLowerCase())
  );
};

const availableReservations = async (request, meals) => {
  console.log(request.query);
  if (request.query.availableReservations !== "true") {
    return meals;
  }
  //   -- Get meals that still has available reservations
  const sql = `SELECT *
   FROM \`meals\`
  JOIN (
  	SELECT \`meal_id\`, SUM(\`number_of_guests\`) AS \`signed_guests\`
  	FROM \`reservations\`
  	  JOIN \`meals\` ON \`meal_id\` = \`meals\`.\`id\`
  	GROUP BY \`meal_id\`
  ) AS \`_\` ON \`meal_id\` = \`meals\`.\`id\`
  WHERE \`max_reservations\` > \`signed_guests\`;`;
  const [mealsWithReservations] = await knex.schema.raw(sql);
  console.log(mealsWithReservations);
  const idsOfAvailableMeals = mealsWithReservations.map(
    (mealWithRes) => mealWithRes.id
  );
  return meals.filter((meal) => idsOfAvailableMeals.includes(meal.id));
};

const createdAfter = (request, meals) => {
  if (request.query.createdAfter === undefined) {
    return meals;
  }
  const date = new Date(request.query.createdAfter);
  if (isNaN(Number(date))) {
    return;
  }
  return meals.filter((meal) => date <= new Date(meal.created_date));
};

const limitArray = (request, meals) => {
  if (request.query.limit === undefined) {
    return meals;
  }
  const limit = parseInt(request.query.limit);
  if (isNaN(limit)) {
    return;
  }
  return meals.slice(0, limit);
};

// GET/api/meals    : Returns all meals
router.get("/", async (request, response) => {
  const meals = await knex("meals").select("*");

  const meals0 = mealsUnderMaxPrice(request, meals);
  if (meals0 === undefined) {
    response.status(400);
    response.send();
    return;
  }
  const meals1 = matchingTitles(request, meals0);
  if (meals1 === undefined) {
    response.status(400);
    response.send();
    return;
  }
  const meals2 = createdAfter(request, meals1);
  if (meals2 === undefined) {
    response.status(400);
    response.send();
    return;
  }
  const meals3 = limitArray(request, meals2);
  if (meals3 === undefined) {
    response.status(400);
    response.send();
    return;
  }
  const meals4 = await availableReservations(request, meals3);
  if (meals4 === undefined) {
    response.status(400);
    response.send();
    return;
  }
  response.send(meals4);
});

// api/meals/	POST	Adds a new meal	POST api/meals/
router.post("/", async (request, response) => {
  try {
    const meals = await knex("meals").select("*");
    response.json(meals);
  } catch (error) {
    throw error;
  }
});

// api/meals/	POST	Adds a new meal	POST api/meals/   ----check
router.post("/", async (request, response) => {
  try {
    request.body.created_date = new Date();
    await knex("meals").insert(request.body);
    const arrayWnewMeal = await knex("meals").select("*");
    response.json(arrayWnewMeal);
  } catch (error) {
    throw error;
  }
});

// api/meals/{id}	GET	Returns meal by id	GET api/meals/2
router.get("/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    const MealByID = await knex("meals").select("*").where({ id: id });
    response.send(MealByID);
  } catch (error) {
    throw error;
  }
});

// api/meals/{id}	PUT	Updates the meal by id	PUT api/meals/2
router.put("/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    await knex("meals").where({ id: id }).update(request.body);
    const updatedMeal = await knex("meals").where({ id: id }).select("*");
    response.send(updatedMeal);
    console.log(updatedMeal);
  } catch (error) {
    throw error;
  }
});

// api/meals/{id}	DELETE	Deletes the meal by id	DELETE meals/2
router.delete("/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    await knex("meals").where({ id: id }).del();
    const arrayAfterDelete = await knex("meals").select("*");
    response.send(arrayAfterDelete);
    console.log(arrayAfterDelete);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
