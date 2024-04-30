// Import required modules

const brandServices = require("../services/brands");

// Module scaffolding
const brandsController = {};

/*
 * Handle the request to retrieve all brands form the database
 * @returns {Promise<Array>} Array of brands
 * @throws {Error} If fetching brands fails
 * @since 28 April 2024
 */
brandsController.getBrands = async (req, res) => {
  try {
    const brands = await brandServices.getAllBrands();
    res.status(200).json({ status: "success", data: brands });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = brandsController;
