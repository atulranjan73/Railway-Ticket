const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();

const P= process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Importing Routes
const UserRouter = require("./router/Authrouter");
const TicketRouter = require("./router/TicketRouter");  // Ensure the correct filename

// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(P, function () {
      console.log(`Server is connected on port ${P}`);
    });
    console.log("Mongoose connected");
  })
  .catch((error) => {
    console.log("Database connection error:", error);
  });

// Routes

app.use("/auth", UserRouter);
app.use("/tickets", TicketRouter); // Added TicketRouter route
