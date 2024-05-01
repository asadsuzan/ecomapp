//Import required modules
const categoryModel = require("../models/Categories");

// Module scaffolding
const categoryServices = {};

/*
 * Retrieves all categories form the database
 * @returns {Promise<Array>} Array of categories
 * @throws {Error} If fetching categories fails
 * @since 28 April 2024
 */
categoryServices.getAllCategories = async () => {
  try {
    const categories = await categoryModel.find({});
    return categories;
  } catch (error) {
    throw new Error("Could not fetch categories: " + error.message);
  }
};

module.exports = categoryServices;
