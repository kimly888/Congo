const router = require("express").Router();
const Product = require("../models/Product");
const { verifyTokenAndAdmin } = require("./verifyToken");

// CREATE PRODUCT (ADMIN ONLY)
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // UPDATE USER INFO
// router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
//   // Handle password changes if any
//   if (req.body.password) {
//     // Reassign original password to updated and encrypted password
//     req.body.password = CryptoJS.AES.encrypt(
//       req.body.password,
//       process.env.PASS_SECRET
//     ).toString();
//   }

//   try {
//     // Search database for user by Id and update
//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       {
//         // Set operator replaces the value of a field to the specified value
//         $set: req.body,
//       },
//       // New option returns document after update is applied
//       { new: true }
//     );

//     // Hide updated User password
//     const { password, ...others } = updatedUser._doc;

//     res.status(200).json(others);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // DELETE USER
// router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.status(200).json("User deleted!");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // GET ALL USERS (ADMIN ONLY)
// router.get("/", verifyTokenAndAdmin, async (req, res) => {
//   const query = req.query.new;

//   try {
//     const users = query
//       ? await User.find().sort({ _id: -1 }).limit(5)
//       : await User.find();

//     // Hide passwords of all Users
//     const filteredUsers = users.map((user) => {
//       const { password, ...others } = user._doc;
//       return others;
//     });

//     res.status(200).json(filteredUsers);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // GET USER (ADMIN ONLY)
// router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);

//     // Hide updated User password
//     const { password, ...others } = user._doc;

//     res.status(200).json(others);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
