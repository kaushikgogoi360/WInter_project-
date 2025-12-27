const router = require("express").Router();
const {
  createComplaint,
  getUserComplaints,
  getAssignedComplaints,
  updateStatus,
} = require("../controllers/complaintController");

const { authMiddleware, isStaff } = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, createComplaint);
router.get("/my", authMiddleware, getUserComplaints);
router.get("/assigned", authMiddleware, isStaff, getAssignedComplaints);
router.put("/:id/status", authMiddleware, updateStatus);

module.exports = router;
