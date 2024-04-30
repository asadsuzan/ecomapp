// Import required modules
const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/products");

// get all products
router.get("/", productControllers.getProducts);

module.exports = router;
