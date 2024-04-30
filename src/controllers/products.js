// Import required modules
const productServices = require("../services/products");

// Module scaffolding
const productController = {};

/*
 * Handle the request to retrieve all products
 * @params {Object} req - The request object
 * @params {Object} res - The response object
 * @since 30 April 2024
 */
productController.getProducts = async (req, res) => {
  try {
    const products = await productServices.getAllProducts();
    res.status(200).json({ status: "success", data: products });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

/*
 * Handle the request to retrieve a product by ID
 * @params {Object} req - The request object
 * @params {Object} res - The response object
 * @since 30 April 2024
 */
productController.getProductById = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await productServices.getProductById(productId);
    if (!product) {
      return res
        .status(404)
        .json({ status: "Not Found", message: "product not found" });
    }
    res.status(200).json({ status: "success", data: product });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = productController;
