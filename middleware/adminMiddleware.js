const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    plan: {
      type: String,
      enum: ["Monthly", "Yearly"],
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["Active", "Expired", "Cancelled"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Subscription", subscriptionSchema);