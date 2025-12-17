const Complaint = require("../models/Complaint");

exports.createComplaint = async (req, res) => {
  try {
    const images = req.files.map(file => file.path);

    const complaint = await Complaint.create({
      userId: req.user.id,
      type: req.body.type,
      description: req.body.description,
      location: JSON.parse(req.body.location),
      images
    });

    res.json({ msg: "Complaint created", complaint });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getComplaints = async (req, res) => {
  const complaints = await Complaint.find();
  res.json(complaints);
};

exports.updateStatus = async (req, res) => {
  const { status } = req.body;

  const updated = await Complaint.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );

  res.json(updated);
};
