const router = require("express").Router();
const { authMiddleware } = require("../middlewares/authMiddleware");
const upload = require("../utils/upload");
const {
  createComplaint,
  getComplaints,
  updateStatus,
} = require("../controllers/complaintController");

router.post(
  "/",
  authMiddleware,
  upload.array("images", 5),
  createComplaint
);

router.get(
  "/",
  authMiddleware,
  getComplaints
);

router.put(
  "/:id/status",
  authMiddleware,
  updateStatus
);

module.exports = router;
