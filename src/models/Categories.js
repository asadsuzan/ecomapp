// Import required modules
const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    categoryName: { type: String, required: true, unique: true },
    categoryImg: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const Category = mongoose.model("categories", categorySchema);

module.exports = Category;
