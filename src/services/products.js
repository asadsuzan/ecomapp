// Import required modules
const productModel = require("../models/Products");

// Module scaffolding
const productServices = {};

// Get All Products
productServices.getAllProducts = async () => {
  try {
    const products = await productModel.find({}); // get all products in database
    return products;
  } catch (error) {
    console.error("Error getting products: ", error);
    throw error; // Re-throw the error for handling in the controller
  }
};

module.exports = productServices;
