const mongoose = require("mongoose");
const ConversionSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    sellerId: {
      type: String,
      required: true,
    },
    buyerId: {
      type: Number,
      required: true,
    },
    readByBuyer: {
      type: String,
      required: true,
    },
    readByBuyer: {
      type: String,
      required: true,
    },
    lastmessage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Conversion", ConversionSchema);
