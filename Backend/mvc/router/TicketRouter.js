const express = require("express");
const ticketRouter = express.Router();
const ticketController = require("../controller/TicketController");

ticketRouter.post("/createTicket",ticketController.createTicket);
ticketRouter.get("/getAllTickets",ticketController.getAllTickets);

module.exports = ticketRouter;
