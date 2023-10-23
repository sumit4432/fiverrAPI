const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./router/UserRoute");
const { connectToDatabase } = require("./db/dbConnect"); // Import the database connection function
const app = express();
const port = process.env.PORT || 5000;

// Connect to the database
connectToDatabase()
  .then(() => {
    app.use(bodyParser.json());
    app.use("/api", userRoutes);

    // Start the server

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
