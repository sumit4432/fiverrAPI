const mongoose = require("mongoose");

const UserGig = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    totaalStar: {
      type: String,
      required: true,
    },
    starNumber: {
      type: String,
      required: true,
    },
    cat: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
    coverImg: {
      type: String,
      required: true,
    },
    images: {
      type: [String], 
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    sortTile: {
      type: String,
      required: true,
    },
    sortDesc: {
      type: String,
      required: true,
    },
    delevryTime: {
      type: Number,
    },
    revision: {
      type: Number,
    },
    featurs: {
      type: [String],
      required: false,
    },
    sales: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gig", UserGig);
