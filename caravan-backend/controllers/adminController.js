const Complaint = require("../models/complaint");

exports.createComplaint = async (req, res) => {
  const complaint = await Complaint.create({
    user: req.user.id,
    title: req.body.title,
    description: req.body.description,
  });

  res.json({ msg: "Complaint created", complaint });
};

exports.getUserComplaints = async (req, res) => {
  const complaints = await Complaint.find({ user: req.user.id });
  res.json(complaints);
};
