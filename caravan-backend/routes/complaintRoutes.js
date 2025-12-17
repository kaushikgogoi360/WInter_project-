const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const upload = require("../utils/upload");
const { createComplaint, getComplaints, updateStatus } =
  require("../controllers/complaintController");

router.post("/", auth, upload.array("images", 5), createComplaint);
router.get("/", auth, getComplaints);
router.put("/:id/status", auth, updateStatus);

module.exports = router;
