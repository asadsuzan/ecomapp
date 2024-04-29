// Import required modules

const brandServices = require("../services/brands");

// Module scaffolding
const brandsController = {};

brandsController.getBrands = async (req, res) => {
  try {
    const brands = await brandServices.getAllBrands();
    // Send successful response with all brands
    res.status(200).json({ status: "success", data: brands });
  } catch (error) {
    console.error("Error on get brand list controller: ", error);
    res.status(500).json({
      status: "failed",
      message: "Error getting brands",
    });
  }
};

module.exports = brandsController;
