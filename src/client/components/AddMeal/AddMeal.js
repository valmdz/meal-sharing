import React, { useState } from "react";
import Modal, { ReactModal } from "react-modal";

Modal.setAppElement("#root");

export const AddMeal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [maxReservations, setMaxReservations] = useState(1);
  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);

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
      const data = await fetch("/api/meals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          description: description,
          max_reservations: maxReservations,
          created_date: new Date(),
          when: date,
          location: location,
          price: price,
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
        <h1 className="section-heading">Arrange a feast</h1>
      </div>
      <div className="container">
        <form onSubmit={submit}>
          Feast title: *
          <input
            type="text"
            value={title}
            placeholder="Give your feast a title"
            onChange={(e) => setTitle(e.target.value)}
            required
          ></input>
          Description: *
          <textarea
            type="text"
            value={description}
            placeholder="Brief description"
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="5"
          ></textarea>
          Max reservations: *
          <input
            type="number"
            value={maxReservations}
            placeholder="Enter a number"
            onChange={(e) => setMaxReservations(e.target.value)}
            required
          ></input>
          When: *
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          ></input>
          Location: *
          <input
            type="text"
            value={location}
            placeholder="Enter full address"
            onChange={(e) => setLocation(e.target.value)}
            required
          ></input>
          Price (DKK): *
          <input
            type="text"
            value={price}
            placeholder="Enter a number"
            onChange={(e) => setPrice(e.target.value)}
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
              top: "5%",
              left: "20%",
              maxWidth: "70%",
              maxHeight: "90%",
              backgroundColor: "none",
            },
            content: {
              position: "absolute",
              borderRadius: "10px",
              border: "8px solid rgb(215, 179, 189)",
              top: "20px",
              padding: "3em",
            },
          }}
        >
          <div className="pop-up">
            <h1>Your feast {title} has been created,</h1>
            <h2>Date: {date} guests</h2>
            <h2>Location: {location} guests</h2>
            <h2>Price: {price} guests</h2>
            <h2>Maximum guests: {maxReservations} guests</h2>

            <h3>See you there!</h3>
            <button onClick={closeModal} className="buttonModal">
              Close
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default AddMeal;
