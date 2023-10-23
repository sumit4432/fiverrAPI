const mongoose = require("mongoose");
const ConversionSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      uinque: true,
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
      type: Boolean,
      required: true,
    },
    readByBuyer: {
      type: Boolean,
      required: true,
    },
    lastmessage: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Conversion", ConversionSchema);
