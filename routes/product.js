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

// UPDATE USER INFO (ADMIN ONLY)
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    // Search database for product by id and update
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        // Set operator replaces the value of a field to the specified value
        $set: req.body,
      },
      // New option returns document after update is applied
      { new: true }
    );

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE PRODUCT (ADMIN ONLY)
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
});

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
