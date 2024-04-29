// Import required modules
const express = require("express");
const categoryControllers = require("../controllers/categories");
const router = express.Router();

// set routes for categories

// Get all categories
router.get("/", categoryControllers.getCategories);

module.exports = router;
