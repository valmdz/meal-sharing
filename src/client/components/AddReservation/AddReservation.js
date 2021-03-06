import React, { useState } from "react";
import Modal, { ReactModal } from "react-modal";
import ReactDOM from "react-dom";
import "./AddReservation.css";

Modal.setAppElement("#root");

export const AddReservation = () => {
  const [reservation, setReservation] = useState({
    number_of_guests: 1,
    meal_id: 0,
    created_date: new Date(),
    contact_phonenumber: "",
    contact_name: "",
    contact_email: "",
  });

  const [disableForm, setDisable] = useState(false);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
    setDisable(true);
  }

  function closeModal() {
    setIsOpen(false);
    setDisable(false);
  }

  const submit = async (event) => {
    event.preventDefault();
    setDisable(true);
    setDisable(false);

    try {
      const data = await fetch("/api/reservations", {
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
      response.status(400).send();
      throw error;
    }
    openModal();
  };

  return (
    <>
      <div>
        <h1 className="section-heading">Attend a feast</h1>
      </div>
      <div className="container">
        <form onSubmit={submit}>
          Feast to attend: *
          <input
            type="number"
            value={reservation.meal_id}
            placeholder="Choose a feast"
            onChange={(e) =>
              setReservation({ ...reservation, meal_id: e.target.value })
            }
            required
          ></input>
          Number of people: *
          <input
            type="number"
            value={reservation.number_of_guests}
            placeholder="Enter the number of people"
            onChange={(e) =>
              setReservation({
                ...reservation,
                number_of_guests: e.target.value,
              })
            }
            required
          ></input>
          Contact name: *
          <input
            type="text"
            value={reservation.contact_name}
            placeholder="Enter name and last name"
            onChange={(e) =>
              setReservation({ ...reservation, contact_name: e.target.value })
            }
            required
          ></input>
          Contact phone: *
          <input
            type="text"
            value={reservation.contact_phonenumber}
            placeholder="Enter your phone number"
            onChange={(e) =>
              setReservation({
                ...reservation,
                contact_phonenumber: e.target.value,
              })
            }
            required
          ></input>
          Contact email: *
          <input
            type="email"
            value={reservation.contact_email}
            placeholder="Enter your email"
            onChange={(e) =>
              setReservation({ ...reservation, contact_email: e.target.value })
            }
            required
          ></input>
          <p></p>
          <p className="small-text">Required fields *</p>
          <button type="submit" disabled={disableForm}>
            Submit
          </button>
        </form>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Your reservation has been registered"
          style={{
            overlay: {
              inset: "10% 15%",
              maxWidth: "70%",
              maxHeight: "80%",
              backgroundColor: "none",
            },
            content: {
              position: "absolute",
              inset: "2em",
              borderRadius: "10px",
              border: "8px solid rgb(215, 179, 189)",
              top: "20px",
              padding: "3em",
              boxShadow: " 0 24px 36px 0 rgb(104 115 125 / 15%)",
            },
          }}
        >
          <div className="pop-up">
            <h1>Hej! </h1>
            <p>{reservation.contact_name}</p>{" "}
            <h1>your following reservation is confirmed:</h1>
            <p>Feast: {reservation.meal_id}</p>
            <p>For {reservation.number_of_guests} guests</p>
            <h3>See you there!</h3>
            <button onClick={closeModal} className="button-modal">
              Close
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default AddReservation;
