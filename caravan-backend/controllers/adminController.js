const User = require("../models/User");
const Complaint = require("../models/Complaint");
const bcrypt = require("bcrypt");

exports.createStaff = async (req, res) => {
  const { name, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const staff = await User.create({
    name,
    email,
    password: hashed,
    role: "staff",
  });

  res.json({ msg: "Staff created", staff });
};

exports.assignComplaint = async (req, res) => {
  const { complaintId, staffId } = req.body;

  const complaint = await Complaint.findByIdAndUpdate(
    complaintId,
    {
      assignedTo: staffId,
      status: "in_progress",
    },
    { new: true }
  );

  res.json({ msg: "Complaint assigned", complaint });
};
