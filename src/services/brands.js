// Import required modules
const mongoose = require("mongoose");
const BrandModel = require("../models/Brands");

//Module scaffolding
const bradServices = {};

// Get brads list
bradServices.getAllBrands = async () => {
  try {
    const brands = await BrandModel.find({}); // Fetch all brands from the database
    return brands;
  } catch (error) {
    console.error("Error getting brand list: ", error);
    throw error; // Re-throw the error for handling in the controller
  }
};

module.exports = bradServices;
