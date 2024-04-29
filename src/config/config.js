// Import required dependencies
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT || 5000,
  database: {
    uri: process.env.DB_URI,
  },
};
