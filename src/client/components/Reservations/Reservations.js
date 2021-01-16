import React, { useState, useEffect } from "react";

export const Reservations = ({reservations}) => {

  return (
    <section className="container-meals">
      <div>
        <h1 className="section-heading">Reservations</h1>
      </div>
      <div className="container">
        {reservations.map((reservation) => {
          return (
            <div className="meals">
              <h3>
                {reservation.contact_name
                  ? reservation.contact_name
                  : "anonymous"}
              </h3>
              <p>
                <span className="bold-text">Number of people:</span>{" "}
                {reservation.number_of_guests
                  ? reservation.number_of_guests
                  : "1"}{" "}
              </p>
              <p>
                <span className="bold-text">Contact number:</span>{" "}
                {reservation.contact_phonenumber
                  ? reservation.contact_phonenumber
                  : "none"}{" "}
              </p>
              <p>
                <span className="bold-text">Contact email:</span>{" "}
                {reservation.contact_email
                  ? reservation.contact_email
                  : "none"}{" "}
              </p>
              <p>
                <span className="bold-text">Created date:</span>{" "}
                {reservation.created_date
                  ? reservation.created_date
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
