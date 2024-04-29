// Import required modules
const categoryServices = require("../services/categories");

// Module scaffolding
const categoryControllers = {};

// Get Categories
categoryControllers.getCategories = async (req, res) => {
  try {
    const categories = await categoryServices.getAllCategories();
    res.status(200).json({ status: "Success", data: categories });
  } catch (error) {
    console.error("Error getting categories: ", error);
    res
      .status(500)
      .json({ status: "failed", message: "Error getting categories" });
  }
};

module.exports = categoryControllers;
