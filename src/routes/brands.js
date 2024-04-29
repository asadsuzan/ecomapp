// Import required modules
const express = require("express");
const brandControllers = require("../controllers/brands");
const router = express.Router();

// set routes for brands

// Get all brands
router.get("/", brandControllers.getBrands);

module.exports = router;
