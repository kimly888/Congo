const router = require("express").Router();
const Order = require("../models/Order");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

// CREATE ORDER
router.post("/", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // ADD TO CART
// router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
//   try {
//     // Search database for product by id and update
//     const cart = await Cart.findByIdAndUpdate(
//       req.params.id,
//       {
//         // Set operator replaces the value of a field to the specified value
//         $set: req.body,
//       },
//       // New option returns document after update is applied
//       { new: true }
//     );

//     res.status(200).json(cart);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // DELETE CART
// router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
//   try {
//     await Cart.findByIdAndDelete(req.params.id);
//     res.status(200).json("Cart emptied!");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // SHOW ALL USER CARTS (ADMIN ONLY)
// router.get("/", verifyTokenAndAdmin, async (req, res) => {
//   try {
//     const carts = await Cart.find();

//     res.status(200).json(carts);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // SHOW USER CART
// router.get("/find/:userId", async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ userId: req.params.userId });
//     res.status(200).json(cart);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
