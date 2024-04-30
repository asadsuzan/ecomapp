// Import required modules
const mongoose = require("mongoose");
const BrandModel = require("../models/Brands");

//Module scaffolding
const bradServices = {};

/*
 * Retrieves all brands form the database
 * @returns {Promise<Array>} Array of brands
 * @throws {Error} If fetching brands fails
 * @since 28 April 2024
 */
bradServices.getAllBrands = async () => {
  try {
    const brands = await BrandModel.find({});
    return brands;
  } catch (error) {
    throw new Error("Could not fetch brands: " + error.message);
  }
};

module.exports = bradServices;
