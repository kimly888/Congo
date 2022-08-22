const router = require("express").Router();
const User = require("../models/User");
const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");

// UPDATE USER
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  // Handle password changes if any
  if (req.body.password) {
    // Reassign original password to updated and encrypted password
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString();
  }

  try {
    // Search database for user by Id and update
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        // Set operator replaces the value of a field to the specified value
        $set: req.body,
      },
      // New option returns document after update is applied
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
