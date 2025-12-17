const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: String,
  description: String,
  location: {
    lat: Number,
    lng: Number
  },
  status: {
    type: String,
    enum: ["OPEN", "IN_PROGRESS", "RESOLVED"],
    default: "OPEN"
  },
  images: [String]
}, { timestamps: true });

module.exports = mongoose.model("Complaint", complaintSchema);
