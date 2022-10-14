import React from "react";
import Button from "react-bootstrap/Button";
import "./Booking.css";
import { useNavigate } from "react-router-dom";

const Booking = () => {
    const navigate = useNavigate();
  return (
    <form className="m-2">
      <div className="_input">
        <label>Name:</label>
        <input type="text" name="name" placeholder="Name" />
        <label>Last Name:</label>
        <input type="text" name="name" placeholder="Last Name" />
        <label>Email:</label>
        <input type="email" name="email" placeholder="Email" />
        <label>Mobile Number:</label>
        <input type="tel" name="telphone" placeholder="Mobile Number" />
        <Button className="m-2 d-flex">Payment</Button>
        <Button
          className="m-2 d-flex"
          onClick={()=>navigate("/")}
        >
          Go Back
        </Button>
      </div>
    </form>
  );
};

export default Booking;
