const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const { createStaff } = require("../controllers/adminController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/register", register);
router.post("/login", login);
// router.post("/create-staff", authMiddleware, isAdmin, createStaff);

module.exports = router;
