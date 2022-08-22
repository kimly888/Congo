const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

// REGISTER
router.post("/register", async (req, res) => {
  // Get new user info
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    // Use crypto-js to hash user passwords (cipher AES)
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
  });

  try {
    // Save new user using save method
    const savedUser = await newUser.save();

    // Send saved user to client side
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
