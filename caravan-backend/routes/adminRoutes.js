const router = require("express").Router();
const { createStaff, assignComplaint } = require("../controllers/adminController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/create-staff", authMiddleware, isAdmin, createStaff);
router.post("/assign-complaint", authMiddleware, isAdmin, assignComplaint);

module.exports = router;
