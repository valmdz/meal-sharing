import React, { useState } from "react";

export const AddMeal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [maxReservations, setMaxReservations] = useState(1);
  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);

  // const [meal, setMeal] = useState({
  //   title: "",
  //   description: "",
  //   maxReservations: 2,
  //   date: new Date(),
  // });
  // const setTitle = (title) => setMeal({ ...meal, title });

  // const createdDate = new Date();

  const submit = async (event) => {
    event.preventDefault();
    // console.log(title, description, maxReservations, date, location, price, createdDate)
    try {
      const data = await fetch("http://localhost:5000/api/meals", {
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
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <h1 class="section-heading">Arrange a feast</h1>
      </div>
      <form onSubmit={submit}>
        Feast title:
        <input
          type="text"
          value={title}
          placeholder="Give your feast a title"
          onChange={(e) => setTitle(e.target.value)}
          // onChange={(e) => setMeal({ ...meal, title: e.target.value })}
        ></input>
        Description:
        <input
          type="text"
          value={description}
          placeholder="Brief description"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        Max reservations:
        <input
          type="number"
          value={maxReservations}
          placeholder="Enter a number"
          onChange={(e) => setMaxReservations(e.target.value)}
        ></input>
        When:
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        Location:
        <input
          type="text"
          value={location}
          placeholder="Enter full address"
          onChange={(e) => setLocation(e.target.value)}
        ></input>
        Price (DKK):
        <input
          type="text"
          value={price}
          placeholder="Enter a number"
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddMeal;
