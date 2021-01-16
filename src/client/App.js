import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.css";
import Meals from "./components/Meals/Meals";
import AddMeal from "./components/AddMeal/AddMeal";
import Home from "./components/Home/Home";
import Reservations from "./components/Reservations/Reservations";
import Reviews from "./components/Reviews/Reviews";
import AddReservation from "./components/AddReservation/AddReservation";
import SearchMeal from "./components/SearchMeal/SearchMeal";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <div>
        <img
          src="src/client/logo-feastSharing-round.svg"
          width="100px"
          className="logo"
        ></img>

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
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/add-reservation">Add a reservation</Link>
        </li>
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
      </ul>

      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/reservations">
        <Reservations></Reservations>
      </Route>
      <Route exact path="/add-reservation">
        <AddReservation></AddReservation>
      </Route>
      <Route exact path="/reviews">
        <Reviews></Reviews>
      </Route>
      <Route exact path="/meals">
        <Meals search={search}></Meals>
      </Route>
      <Route exact path="/add-meal">
        <AddMeal></AddMeal>
      </Route>
    </Router>
  );
};

export default App;
