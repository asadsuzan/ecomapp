// Import required modules
const mongoose = require("mongoose");
const productModel = require("../models/Products");

// Module scaffolding
const productServices = {};

/*
 * Retrieves all products form the database
 * @returns {Promise<Array>} Array of products
 * @throws {Error} If fetching products fails
 * @since 30 April 2024
 */
productServices.getAllProducts = async () => {
  try {
    const products = await productModel.find({});
    return products;
  } catch (error) {
    throw new Error("Could not fetch products: " + error.message);
  }
};

/*
 * Retrieves a product by its ID form the  database
 * @params {string } productId - The ID of the product to retrieve
 * @returns {Promise<Object| null>} The product object if found , null otherwise
 * @throws {Error} If fetching product fails
 * @since 30 April 2024
 */
productServices.getProductById = async (productId) => {
  try {
    const product = await productModel.findById(productId);
    return product;
  } catch (error) {
    throw new Error("Could not fetch product: " + error.message);
  }
};

/*
 * Retrieves products by category form the  database
 * @params {string } categoryId - The ID of the category associated with products to retrieve
 * @returns {Promise<Array>} The products Array
 * @throws {Error} If fetching products fails
 * @since 2 May 2024
 */

productServices.getProductsCategory = async (categoryId) => {
  try {
    // Query products based on the provided categoryId
    const products = await productModel.aggregate([
      // Match products with the provided categoryId
      { $match: { categoryID: new mongoose.Types.ObjectId(categoryId) } },

      // Perform a lookup to to get the category details for each products
      {
        $lookup: {
          from: "categories",
          localField: "categoryID",
          foreignField: "_id",
          as: "category",
        },
      },

      // Unwind the category array to flatten it
      { $unwind: { path: "$category" } },

      // Project to exclude unnesaseray field
      {
        $project: {
          createdAt: 0,
          updatedAt: 0,
          category: { createdAt: 0, updatedAt: 0 },
        },
      },
    ]);

    // Return the retrieved products
    return products;
  } catch (error) {
    throw new Error("Could not fetch products : " + error);
  }
};

/*
 * Retrieves products by brands form the  database
 * @params {string } brandId - The ID of the brand associated with products to retrieve
 * @returns {Promise<Array>} The products Array
 * @throws {Error} If fetching products fails
 * @since 3 May 2024
 */

productServices.getProductsBrand = async (brandId) => {
  try {
    // Query products based on the provided brandId
    const products = await productModel.aggregate([
      // Match products with the provided brandId
      { $match: { brandID: new mongoose.Types.ObjectId(brandId) } },

      // Perform a lookup to to get the brand details for each products
      {
        $lookup: {
          from: "brands",
          localField: "brandID",
          foreignField: "_id",
          as: "brand",
        },
      },

      // Unwind the category array to flatten it
      { $unwind: { path: "$brand" } },

      // Project to exclude unnecessary field
      {
        $project: {
          createdAt: 0,
          updatedAt: 0,
          brand: { createdAt: 0, updatedAt: 0 },
        },
      },
    ]);

    // Return the retrieved products
    return products;
  } catch (error) {
    throw new Error("Could not fetch products : " + error);
  }
};

/*
 * Retrieves products by remarks form the  database
 * @params {string} remark  - The remark status <new/top/best/popular/...>
 * @returns {Promise<Array>} The products Array
 * @throws {Error} If fetching products fails
 * @since 3 May 2024
 */

productServices.getProductsByRemark = async (remarkStatus) => {
  try {
    // Query products based on the provided remark status
    const products = await productModel.aggregate([
      // Match products with the provided remark status
      { $match: { remark: remarkStatus } },

      // Project to exclude unnecessary field
      {
        $project: {
          createdAt: 0,
          updatedAt: 0,
        },
      },
    ]);

    // Return the retrieved products

    return products;
  } catch (error) {
    throw new Error("Could not fetch products : " + error);
  }
};

/*
 * Retrieves products by search term the  database
 * @params {string} keyword  - The search term
 * @returns {Promise<Array>} The products Array
 * @throws {Error} If fetching products fails
 * @since 4 May 2024
 */

productServices.getProductsBySearchTerm = async (searchTerm) => {
  try {
    // Case insensitive  search
    const regex = new RegExp(searchTerm, "i");

    // Query products based on the provided keyword
    const products = await productModel.find({ $text: { $search: searchTerm } });

    // Return the retrieved products

    return products;
  } catch (error) {
    throw new Error("Could not fetch products : " + error);
  }
};
module.exports = productServices;
