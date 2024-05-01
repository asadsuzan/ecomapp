// Import required modules
const express = require("express");
const categoryControllers = require("../controllers/categories");
const router = express.Router();

// Define routes for handling category related request

/*
 * Route for retrieve all categories
 * GET  /categories
 * @handler getCategories - Controller function to handle the request
 * @since 28 April 2024
 */
router.get("/", categoryControllers.getCategories);

module.exports = router;
