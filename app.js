const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { connectToDatabase } = require("./db/dbConnect");
const userRoutes = require("./router/UserRoute");
const authRoutes = require("./router/authRoute");

const app = express();

const port = process.env.PORT || 5000;

// Connect to the database
connectToDatabase()
  .then(() => {
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use("/api", userRoutes);
    app.use("/api", authRoutes);

    // Start the server

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
