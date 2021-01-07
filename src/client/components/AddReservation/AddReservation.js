import React, { useState } from "react";
// import React from "react";

export const AddReservation = () => {
  const [reservation, setReservation] = useState({
    number_of_guests: 1,
    meal_id: 0,
    created_date: new Date(),
    contact_phonenumber: "",
    contact_name: "",
    contact_email: "",
  });

  const submit = async (event) => {
    event.preventDefault();

    try {
      const data = await fetch("http://localhost:5000/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          number_of_guests: reservation.number_of_guests,
          meal_id: reservation.meal_id,
          created_date: reservation.created_date,
          contact_phonenumber: reservation.contact_phonenumber,
          contact_name: reservation.contact_name,
          contact_email: reservation.contact_email,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div class="section-heading">Sign up for a feast</div>
      <form onSubmit={submit}>
        Feast to attend:
        <input
          type="number"
          value={reservation.meal_id}
          placeholder="Choose a feast"
          onChange={(e) =>
            setReservation({ ...reservation, meal_id: e.target.value })
          }
        ></input>
        Number of people:
        <input
          type="number"
          value={reservation.number_of_guests}
          placeholder="Enter the number of people"
          onChange={(e) =>
            setReservation({ ...reservation, number_of_guests: e.target.value })
          }
        ></input>
        Contact name:
        <input
          type="text"
          value={reservation.contact_name}
          placeholder="Enter name and lastname"
          onChange={(e) =>
            setReservation({ ...reservation, contact_name: e.target.value })
          }
        ></input>
        Contact phone:
        <input
          type="text"
          value={reservation.contact_phonenumber}
          placeholder="Enter your phonenumber"
          onChange={(e) =>
            setReservation({
              ...reservation,
              contact_phonenumber: e.target.value,
            })
          }
        ></input>
        Contact email:
        <input
          type="email"
          value={reservation.contact_email}
          placeholder="Enter your email"
          onChange={(e) =>
            setReservation({ ...reservation, contact_email: e.target.value })
          }
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddReservation;
