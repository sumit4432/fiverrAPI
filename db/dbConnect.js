const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
async function connectToDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://sumit:sumit1234@fiverr.s2rhuhk.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }
}

module.exports = {
  connectToDatabase,
};
