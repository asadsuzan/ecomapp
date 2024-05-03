// Import required modules
const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/products");

// Define routes for handling products related request

/*
 * Route for retrieve all products
 * GET  /products
 * @handler getProducts - Controller function to handle the request
 * @since 30 April 2024
 */
router.get("/", productControllers.getProducts);

/*
 * Route for retrieve a product by ID
 * GET  /products/:productId
 * @params {string} :productId - The ID of the  to retrieve
 * @handler getProductById - Controller function to handle the request
 * @since 30 April 2024
 */
router.get("/:productId", productControllers.getProductById);

/*
 * Route for retrieve  products by category
 * GET  /products/category/:categoryID
 * @params {string} :categoryID - The ID of the category to retrieve
 * @handler getProductsByCategory - Controller function to handle the request
 * @since 2 May 2024
 */
router.get("/category/:categoryId", productControllers.getProductsByCategory);

/*
 * Route for retrieve  products by brand
 * GET  /products/brand/:brandId
 * @params {string} :brandId - The ID of the brand to retrieve
 * @handler getProductsByBrands - Controller function to handle the request
 * @since 2 May 2024
 */
router.get("/brands/:brandId", productControllers.getProductsByBrands);
module.exports = router;
