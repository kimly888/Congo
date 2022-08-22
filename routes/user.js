const router = require("express").Router();
const User = require("../models/User");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

// UPDATE USER INFO
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

    // Hide updated User password
    const { password, ...others } = updatedUser._doc;

    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE USER
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json("User deleted!")
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;
