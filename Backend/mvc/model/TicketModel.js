const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  name: { type: String, required: true },
  source: { type: String, required: true },
  destination: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  duration: { type: String, required: true },
  price: { type: Number, required: true },
  sit: { type: String, required: true },
  number: { type: String, required: true }
});

const Ticket = mongoose.model("course", TicketSchema);

module.exports = Ticket;
