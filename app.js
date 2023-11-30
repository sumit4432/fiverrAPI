const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors"); // Added CORS middleware
const morgan = require("morgan"); // Added logging middleware
const { connectToDatabase } = require("./db/dbConnect");
const userRoutes = require("./router/UserRoute");
const authRoutes = require("./router/authRoute");
const gigRoutes = require("./router/gigRoute");

// Load environment variables from .env file
require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

// Connect to the database
connectToDatabase()
  .then(() => {
    // Middleware
    app.use(cors());
    app.use(morgan("combined"));
    app.use(bodyParser.json());
    app.use(cookieParser());

    // Routes
    app.use("/api", userRoutes);
    app.use("/api", authRoutes);
    app.use("/api", gigRoutes);

    // Error handling middleware
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send("Something went wrong!");
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
