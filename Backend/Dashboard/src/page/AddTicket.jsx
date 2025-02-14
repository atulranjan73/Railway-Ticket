import React, { useState } from "react";
import axios from "axios";
import "../style/Pages/AddTicket.css"

const TicketForm = () => {
  const [ticket, setTicket] = useState({ name: "", source: "", destination: "", date: "", time: "", duration: "", price: "", sit: "", number: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicket({ ...ticket, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/tickets/createTicket", ticket);
      alert("Ticket added successfully!");
      console.log(response.data);
      setTicket({ name: "", source: "", destination: "", date: "", time: "", duration: "", price: "", sit: "", number: "" });
    } catch (error) {
      console.error("Error adding ticket:", error);
      alert("Failed to add ticket.");
    }
  };

  return (
    <div className="container">
      <form className="ticket-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group"><label>Train Name:</label><input type="text" name="name" value={ticket.name} onChange={handleChange} required /></div>
          <div className="form-group"><label>Source:</label><input type="text" name="source" value={ticket.source} onChange={handleChange} required /></div>
          <div className="form-group"><label>Destination:</label><input type="text" name="destination" value={ticket.destination} onChange={handleChange} required /></div>
        </div>

        <div className="form-row">
          <div className="form-group"><label>Date:</label><input type="date" name="date" value={ticket.date} onChange={handleChange} required /></div>
          <div className="form-group"><label>Time:</label><input type="time" name="time" value={ticket.time} onChange={handleChange} required /></div>
          <div className="form-group"><label>Duration:</label><input type="text" name="duration" value={ticket.duration} onChange={handleChange} required /></div>
        </div>

        <div className="form-row">
          <div className="form-group"><label>Price (₹):</label><input type="number" name="price" value={ticket.price} onChange={handleChange} required /></div>
          <div className="form-group"><label>Seat Type:</label>
            <select name="sit" value={ticket.sit} onChange={handleChange} required>
              <option value="">Select Seat Type</option>
              <option value="Sleeper">Sleeper</option>
              <option value="AC">AC</option>
              <option value="General">General</option>
            </select>
          </div>
          <div className="form-group"><label>Train Number:</label><input type="text" name="number" value={ticket.number} onChange={handleChange} required /></div>
        </div>

        <button type="submit" className="add-btn">Add Ticket</button>
      </form>
    </div>
  );
};

export default TicketForm;
