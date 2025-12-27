const Complaint = require("../models/Complaint");

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

exports.getAssignedComplaints = async (req, res) => {
  const complaints = await Complaint.find({ assignedTo: req.user.id });
  res.json(complaints);
};

exports.updateStatus = async (req, res) => {
  const { status } = req.body;

  const complaint = await Complaint.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );

  res.json({ msg: "Status updated", complaint });
};
