// Import required modules
const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    short_des: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Boolean, required: true },
    discount_price: {
      type: Number,
      required: function () {
        return this.discount;
      },
    }, // Make discount_price required if discount is true
    image: { type: String, required: true },
    stock: { type: Number, required: true },
    star: { type: Number },
    remark: { type: String },
    category_id: { type: Schema.Types.ObjectId },
    brand_id: { type: Schema.Types.ObjectId },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model("Products", productSchema);
module.exports = Product;
