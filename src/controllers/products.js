// Import required modules
const mongoose = require("mongoose");
const productServices = require("../services/products");
const { ValidationError, NotFoundError } = require("../utils/errorHandler");

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
  try {
    // Extract the product Id form the request object
    const { productId } = req.params;

    // check if not valid product ID
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      throw new ValidationError("Invalid product Id");
    }

    // Retrieves product by product ID form the product services
    const product = await productServices.getProductById(productId);

    // Check if product ID not found
    if (!product) {
      throw new NotFoundError("Product not found ");
    }

    // Send successful response with retrieved product
    res.status(200).json({ status: "success", data: product });
  } catch (error) {
    // Handle validation Error
    if (error instanceof ValidationError) {
      res.status(400).json({ status: "error", message: error.message });
    }

    // Handle Not found error
    else if (error instanceof NotFoundError) {
      res.status(404).json({ status: "error", message: error.message });
    }

    // Handle server side error
    else {
      res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    }
  }
};

/*
 * Handle the request to retrieve  products by category
 * @params {Object} req - The request object
 * @params {Object} res - The response object
 * @since 2 May 2024
 */
productController.getProductsByCategory = async (req, res) => {
  try {
    // Extract the categoryId from request params
    const { categoryId } = req.params;

    // check if not valid categoryId
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      throw new ValidationError("Invalid category Id");
    }

    // Retrieve products by categoryId from the product service
    const products = await productServices.getProductsCategory(categoryId);

    // Check if no products found with the category Id
    if (!products.length) {
      throw new NotFoundError("No Products found in this category");
    }

    // Send successful response with retrieved products
    res.status(200).json({ status: "success", data: products });
  } catch (error) {
    // Handle validation error
    if (error instanceof ValidationError) {
      res.status(400).json({ status: "error", message: error.message });
    }
    // Handle NotFound Error
    else if (error instanceof NotFoundError) {
      res.status(404).json({ status: "error", message: error.message });
    }
    // Handle others errors
    else {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
};

/*
 * Handle the request to retrieve  products by brand
 * @params {Object} req - The request object
 * @params {Object} res - The response object
 * @since 3 May 2024
 */
productController.getProductsByBrands = async (req, res) => {
  try {
    // Extract the brandId from request params
    const { brandId } = req.params;

    // check if not valid brandId
    if (!mongoose.Types.ObjectId.isValid(brandId)) {
      throw new ValidationError("Invalid brand Id");
    }

    // Retrieve products by brandId from the product service
    const products = await productServices.getProductsBrand(brandId);

    // Check if no products found with the brand Id
    if (!products.length) {
      throw new NotFoundError("No Products found for this brand");
    }

    // Send successful response with retrieved products
    res.status(200).json({ status: "success", data: products });
  } catch (error) {
    // Handle validation error
    if (error instanceof ValidationError) {
      res.status(400).json({ status: "error", message: error.message });
    }
    // Handle NotFound Error
    else if (error instanceof NotFoundError) {
      res.status(404).json({ status: "error", message: error.message });
    }
    // Handle others errors
    else {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
};

/*
 * Handle the request to retrieve  products by remark status
 * @params {Object} req - The request object
 * @params {Object} res - The response object
 * @since 3 May 2024
 */
productController.getProductsByRemark = async (req, res) => {
  try {
    // Extract the remark status  from request params
    const { remarkStatus } = req.params;

    // check if not remark status
    if (!remarkStatus) {
      throw new ValidationError("Remark status required");
    }

    // Retrieve products by remark status from the product service
    const products = await productServices.getProductsByRemark(remarkStatus);

    // Check if no products found with the remark status
    if (!products.length) {
      throw new NotFoundError("No Products found for this remark status");
    }

    // Send successful response with retrieved products
    res.status(200).json({ status: "success", data: products });
  } catch (error) {
    // Handle validation error
    if (error instanceof ValidationError) {
      res.status(400).json({ status: "error", message: error.message });
    }
    // Handle NotFound Error
    else if (error instanceof NotFoundError) {
      res.status(404).json({ status: "error", message: error.message });
    }
    // Handle others errors
    else {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
};

/*
 * Handle the request to retrieve  products by search terms
 * @params {Object} req - The request object
 * @params {Object} res - The response object
 * @since 4 May 2024
 */
productController.getProductsBySearchTerm = async (req, res) => {
  try {
    // Extract the search  term   from request params
    const { searchTerm } = req.params;

    // check if not remark status
    if (!searchTerm) {
      throw new ValidationError("Include search terms is required");
    }

    // Retrieve products by the search terms  from the product service
    const products = await productServices.getProductsBySearchTerm(searchTerm);

    // Check if no products found with the search terms
    if (!products.length) {
      throw new NotFoundError("No Products found for this search term");
    }

    // Send successful response with retrideved products
    res.status(200).json({ status: "success", data: products });
  } catch (error) {
    // Handle validation error
    if (error instanceof ValidationError) {
      res.status(400).json({ status: "error", message: error.message });
    }
    // Handle NotFound Error
    else if (error instanceof NotFoundError) {
      res.status(404).json({ status: "error", message: error.message });
    }
    // Handle others errors
    else {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
};
module.exports = productController;
