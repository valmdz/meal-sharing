import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.css";
import Meals from "./components/Meals/Meals";
import AddMeal from "./components/AddMeal/AddMeal";
import Home from "./components/Home/Home";
import Reservations from "./components/Reservations/Reservations";
import Reviews from "./components/Reviews/Reviews";
import AddReservation from "./components/AddReservation/AddReservation";
import SearchMeal from "./components/SearchMeal/SearchMeal";
import MyRegistrations from "./components/MyRegistrations/MyRegistrations";
import logo from './logo.png';

const App = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    (async () => {
      const respMeals = await fetch("/api/meals");
      const jsonResponse = await respMeals.json();
      setMeals(() => jsonResponse);
    })();
  }, []);

  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    (async () => {
      const respMeals = await fetch("/api/reservations");
      const jsonResponse = await respMeals.json();
      setReservations((prev) => {
        return jsonResponse;
      });
    })();
  }, []);

  return (
    <Router>
      <div>
      <Link to="/"><img src={logo} className="logo"></img></Link>
        <div className="search-bar">
          <SearchMeal
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          ></SearchMeal>
        </div>
      </div>

      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/meals">All meals</Link>
        </li>
        <li>
          <Link to="/add-meal">Add a meal</Link>
        </li>
        <li>
          <Link to="/add-reservation">Add a reservation</Link>
        </li>
        <li>
          <Link to="/my-registrations">Handle registrations</Link>
        </li>
      </ul>

      <Route exact path="/">
        <Home meals={meals}></Home>
      </Route>
      <Route exact path="/reservations">
        <Reservations reservations={reservations}></Reservations>
      </Route>
      <Route exact path="/add-reservation">
        <AddReservation></AddReservation>
      </Route>
      <Route exact path="/reviews">
        <Reviews></Reviews>
      </Route>
      <Route exact path="/meals">
        <Meals search={search} meals={meals}></Meals>
      </Route>
      <Route exact path="/add-meal">
        <AddMeal></AddMeal>
      </Route>
      <Route exact path="/my-registrations">
        <MyRegistrations
          meals={meals}
          reservations={reservations}
        ></MyRegistrations>
      </Route>
    </Router>
  );
};

export default App;
