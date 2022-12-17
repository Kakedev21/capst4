const mongoose = require("mongoose");

const qrSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
    },
    email: {
      type: String,
    },
    contact: {
      type: Number,
    },
    address: {
      type: String,
    },
    checkIn: {
      type: Date,
    },
    checkOut: {
      type: Date,
    },
    guestNumber: {
      type: Number,
    },
    minor: {
      type: Number,
    },
    adult: {
      type: Number,
    },
    companionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Companion",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("QrSchema", qrSchema);
