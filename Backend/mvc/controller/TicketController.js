const Ticket = require("../model/TicketModel");

// Function to create a ticket
const createTicket = async (req, res) => {
  try {
    console.log(req.body.name);
    const response = await Ticket.create(req.body);
    if (!response) {
      return res.status(400).json({ message: "Error occurred while creating the ticket." });
    }
    return res.status(201).json({ message: "Ticket successfully created", ticket: response });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Function to fetch all tickets
const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({});
    return res.status(200).json({ message: "Tickets retrieved successfully", tickets });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createTicket, getAllTickets };
