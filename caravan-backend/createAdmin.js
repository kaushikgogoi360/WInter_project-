const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User");

mongoose.connect(process.env.MONGO_URI);

(async () => {
  const hashed = await bcrypt.hash("admin123", 10);

  await User.create({
    name: "aman",
    email: "aman123@gmail.com",
    password: hashed,
    role: "admin",
  });

  console.log("Admin created");
  process.exit();
})();
