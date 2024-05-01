// Import required modules
const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema for the categories collection
const categorySchema = new Schema(
  {
    // Category name (required)
    categoryName: { type: String, required: true, unique: true },

    // Category img url (required)
    categoryImg: { type: String, required: true },
  },

  {
    // Automatically add timestamps (createdAt, updatedAt)
    timestamps: true,

    // Disable version key (__v) by default
    versionKey: false,
  }
);

const Category = mongoose.model("categories", categorySchema);

module.exports = Category;
