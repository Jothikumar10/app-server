const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    instructor: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    oldPrice: {
      type: Number,
    },

    rating: {
      type: Number,
      default: 4.5,
    },

    reviews: {
      type: Number,
      default: 0,
    },

    badge: {
      type: String,
      default: "Bestseller",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);