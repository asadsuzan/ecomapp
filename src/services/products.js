// Import required modules
const productModel = require("../models/Products");

// Module scaffolding
const productServices = {};

/*
 * Retrieves all products form the database
 * @returns {Promise<Array>} Array of products
 * @throws {Error} If fetching products fails
 * @since 30 April 2024
 */
productServices.getAllProducts = async () => {
  try {
    const products = await productModel.find({});
    return products;
  } catch (error) {
    throw new Error("Could not fetch products: " + error.message);
  }
};

/*
 * Retrieves a product by its ID form the  database
 * @params {string } productId - The ID of the product to retrieve
 * @returns {Promise<Object| null>} The product object if found , null otherwise
 * @throws {Error} If fetching product fails
 * @since 30 April 2024
 */
productServices.getProductById = async (productId) => {
  try {
    const product = await productModel.findById(productId);
    return product;
  } catch (error) {
    throw new Error("Could not fetch product: " + error.message);
  }
};

module.exports = productServices;
