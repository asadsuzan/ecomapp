//Import required modules
const categoryModel = require("../models/Categories");

// Module scaffolding
const categoryServices = {};

// Get all categories list
categoryServices.getAllCategories = async () => {
  try {
    const categories = await categoryModel.find({});
    return categories;
  } catch (error) {
    console.error("Error getting category list :", error);
    throw error; // Re-throw the error for handling in the controller
  }
};

module.exports = categoryServices;
