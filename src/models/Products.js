// Import required modules
const mongoose = require("mongoose");

const { Schema } = mongoose;

// Define the schema for the Product collection
const productSchema = new Schema(
  {
    // Title of the product (required)
    title: { type: String, required: true },

    // Short description of the product (required)
    short_des: { type: String, required: true },

    // Price of the product (required)
    price: { type: Number, required: true },

    // Indicates whether the product has a discount (required)
    discount: { type: Boolean, required: true },

    // Discounted price of the product (required if discount is true)
    discount_price: {
      type: Number,
      required: function () {
        return this.discount;
      },
    },

    // URL of the product image (required)
    image: { type: String, required: true },

    // Stock quantity of the product (required)
    stock: { type: Number, required: true },

    // Star rating of the product (optional)
    star: { type: Number },

    // Additional remarks or notes about the product (required)
    remark: { type: String, required: true },

    // ID of the category associated with the product (required)
    categoryID: {
      type: Schema.Types.ObjectId,
      ref: "categories",
      required: true,
    },

    // ID of the brand associated with the product (required)
    brandID: { type: Schema.Types.ObjectId, ref: "brands", required: true },
  },
  {
    // Automatically add timestamps (createdAt, updatedAt)
    timestamps: true,

    // Disable versioning (__v) by default
    versionKey: false,
  }
);

// Create a model for the Product collection
const Product = mongoose.model("Products", productSchema);

module.exports = Product;
