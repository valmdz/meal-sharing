import React, { useState } from "react";

export const MyRegistrations = ({ reservations }) => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(null);

  const submit = async (event) => {
    event.preventDefault();
    setQuery(search);
  };

  const Find = () => {
    if (query == null) {
      return <></>;
    }
    const match = reservations.find((reservation) =>
      reservation.contact_name.toLowerCase().includes(query.toLowerCase())
    );
    if (match === undefined) {
      return (
        <div className="previewReservation">
          <p>No results for that name</p>
        </div>
      );
    }
    return (
      <div className="previewReservation">
        <h1> My reservations</h1>
        <p>
          {" "}
          <span className="bold-text">Feast to attend: </span>
          {match.meal_id}
        </p>
        <p>
          {" "}
          <span className="bold-text">Number of guests: </span>{" "}
          {match.number_of_guests}
        </p>
        <p>
          {" "}
          <span className="bold-text">Name: </span> {match.contact_name}
        </p>
        <p>
          {" "}
          <span className="bold-text">Phone number: </span>{" "}
          {match.contact_phonenumber}
        </p>
        <p>
          {" "}
          <span className="bold-text">Email: </span>
          {match.contact_email}
        </p>
        <p>
          {" "}
          <span className="bold-text">Created date: </span>
          {match.created_date}
        </p>
      </div>
    );
  };

  return (
    <>
      <div>
        <h1 className="section-heading">Handle registrations</h1>
      </div>
      <div>
        <div className="container">
          <form onSubmit={submit}>
            Name and last name: *
            <input
              type="text"
              value={search}
              placeholder="Enter your name and last name"
              onChange={(event) => setSearch(event.target.value)}
              required
            ></input>
            <p></p>
            <p className="small-text">Required fields *</p>
            <button type="submit">Search</button>
          </form>
        </div>
        <div>
          <Find />
        </div>
      </div>
    </>
  );
};

export default MyRegistrations;
