// Import required modules
const express = require("express");
const brandControllers = require("../controllers/brands");
const router = express.Router();

// Define routes for handling products related request

/*
 * Route for retrieve all brands
 * GET  /brands
 * @handler getBrands - Controller function to handle the request
 * @since 28 April 2024
 */
router.get("/", brandControllers.getBrands);

module.exports = router;
