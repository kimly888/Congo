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

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const queryNew = req.query.new;
  const queryCategory = req.query.category;

  try {
    let products;

    if (queryNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (queryCategory) {
      // In operator selects products where the category of a field equals any product that has that category in the specified categories array
      products = await Product.find({
        categories: {
          $in: [queryCategory],
        },
      });
    } else {
      // Show all products if no query is given
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET PRODUCT
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
