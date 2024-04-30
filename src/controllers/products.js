// Import required modules
const productServices = require("../services/products");

// Module scaffolding
const productController = {};

// Get All products
productController.getProducts = async (req, res) => {
  try {
    const products = await productServices.getAllProducts(); // get all products
    res.status(200).json({ status: "success", data: products });
  } catch (error) {
    console.error("Error getting products: ", error);
    res
      .status(500)
      .json({ status: "failed", message: "Error getting products" });
  }
};

module.exports = productController;
