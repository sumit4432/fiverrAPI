const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./router/UserRoute");
const app = express();
const port = process.env.PORT || 5000;

// Connect to your MongoDB database
// mongoose.connect("mongodb://localhost/your-database-name", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.on("connected", () => {
//   console.log("Connected to MongoDB");
// });

// mongoose.connection.on("error", (err) => {
//   console.error("MongoDB connection error:", err);
// });

app.use(bodyParser.json());
app.use("/api", userRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
