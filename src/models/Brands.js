// Import required dependencies
const mongoose = require("mongoose");
const { bradServices } = require("../services/brands");
const { Schema } = mongoose;

const BrandSchema = new Schema(
  {
    brandName: { type: String, required: true, unique: true },
    brandImg: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Brand = mongoose.model("Brands", BrandSchema);

module.exports = Brand;
