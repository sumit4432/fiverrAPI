const { default: mongoose } = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    gigId: {
      type: String,
    },
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
    },
    sellerId: {
      type: String,
    },
    buyerId: {
      type: String,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    payment_intent: {
      type: String,
      requiered: True,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order", OrderSchema);
