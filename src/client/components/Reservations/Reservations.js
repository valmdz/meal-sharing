/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";

export const Reservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    (async () => {
      const respMeals = await fetch("http://localhost:5000/api/reservations");
      const jsonResponse = await respMeals.json();
      console.log(jsonResponse);
      setReservations((prev) => {
        return jsonResponse;
      });
    })();
  }, []);

  return (
    <section class="container-meals">
      <div>
        <h1 class="section-heading">Reservations</h1>
      </div>
      <div class="container">
        {reservations.map((reservation) => {
          return (
            <div className="meals">
              <h3>
                {reservation.contact_name
                  ? reservation.contact_name
                  : "anonymous"}
              </h3>
              <p>
                <span class="bold-text">Number of people:</span>{" "}
                {reservation.number_of_guests
                  ? reservation.number_of_guests
                  : "1"}{" "}
              </p>
              <p>
                <span class="bold-text">Contact number:</span>{" "}
                {reservation.contact_phonenumber
                  ? reservation.contact_phonenumber
                  : "none"}{" "}
              </p>
              <p>※</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Reservations;
