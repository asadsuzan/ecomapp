// Import required dependencies
const mongoose = require("mongoose");
const { bradServices } = require("../services/brands");
const { Schema } = mongoose;

// Define the schema for the Product collection
const BrandSchema = new Schema(
  {
    brandName: { type: String, required: true, unique: true },

    brandImg: { type: String, required: true },
  },
  {
    // Automatically add timestamps (createdAt, updatedAt)
    timestamps: true,

    // Disable versioning (__v) by default
    versionKey: false,
  }
);

// Create a model for the brands collection
const Brand = mongoose.model("Brands", BrandSchema);

module.exports = Brand;
