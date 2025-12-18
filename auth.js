const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ message: "User registered successfully" });
});

// Login
router.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);
  if (user) res.json({ message: "Login successful" });
  else res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;
