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

// UPDATE ORDER (ADMIN ONLY)
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    // Search database for product by id and update
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      {
        // Set operator replaces the value of a field to the specified value
        $set: req.body,
      },
      // New option returns document after update is applied
      { new: true }
    );

    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CANCEL ORDER (ADMIN ONLY)
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order cancelled!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// SHOW ALL USER ORDERS (ADMIN ONLY)
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// SHOW USER ORDER
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const order = await Order.find({ userId: req.params.userId });
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
