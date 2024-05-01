// Import required modules
const categoryServices = require("../services/categories");

// Module scaffolding
const categoryControllers = {};

/*
 * Handle the request to retrieve all categories
 * @params {Object} req - The request object
 * @params {Object} res - The response object
 * @since 28 April 2024
 */
categoryControllers.getCategories = async (req, res) => {
  try {
    const categories = await categoryServices.getAllCategories();
    res.status(200).json({ status: "Success", data: categories });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = categoryControllers;
