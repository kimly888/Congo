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

// LOGIN
router.post("/login", async (req, res) => {
  try {
    // Find user in database using findOne method since each user is unique
    const user = await User.findOne({ username: req.body.username });

    // Decrypt user password
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECRET
    );

    // Stringify decrypted password
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    
    // Hide User password
    const { password, ...others } = user._doc;

    // BUG
    if (!user) {
      // Send an error if user does not exist
      res.status(401).json("User does not exist!");
    } else if (req.body.password !== originalPassword) {
      // Send error for wrong passwords
      res.status(401).json("Wrong password!");
    } else {
      res.status(200).json(others);
    }
  } catch (err) {
    res.status(500).json("User does not exist");
  }
});

module.exports = router;
