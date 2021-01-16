import React, { useEffect, useState } from "react";

export const MyRegistrations = ({ meals }) => {
  return (
    <>
      <div>
        <h1 className="section-heading">My registrations</h1>
      </div>
      <div className="container">
        <form>
          Name and lastname: *
          <input
            type="text"
            placeholder="Enter your name with lastname"
          ></input>
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default MyRegistrations;
