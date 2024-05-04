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

/*
 * Route for retrieve  products by remark status
 * GET  /products/remark/:remarkStatus
 * @params {string} :remarkStatus - The remark status of the products to retrieve
 * @handler getProductsByRemark - Controller function to handle the request
 * @since 3 May 2024
 */
router.get("/remark/:remarkStatus", productControllers.getProductsByRemark);

/*
 * Route for retrieve  products by search terms
 * GET  /products/search/:searchTerm
 * @params {string} :keyword - The text of the products to retrieve
 * @handler getProductsBySearchTerm - Controller function to handle the request
 * @since 4 May 2024
 */
router.get("/search/:searchTerm", productControllers.getProductsBySearchTerm);

module.exports = router;
