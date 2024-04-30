// Import required dependencies
const express = require("express");
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const morgan = require("morgan");
const path = require("path");
const config = require("./src/config/config.js");
const brandRoutes = require("./src/routes/brands.js");
const categoryRoutes = require("./src/routes/categories.js");
const productRoutes = require("./src/routes/products");

// Connect with MongoDB
mongoose
  .connect(config.database.uri, {})
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.error("MongoDB connection error: ", error));

const app = express();

// Logging middleware
app.use(morgan("dev"));

// Security middleware
app.use(helmet());

// Cross-Origin Resource Sharing (CORS) middleware
app.use(cors());

// HTTP Parameter Pollution (HPP) protection middleware
app.use(hpp());

// Cookie parser middleware
app.use(cookieParser());

// MongoDB data sanitization middleware
app.use(mongoSanitize());

// Configure request body limits for JSON and URL-encoded data
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Rate limiting middleware
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

// Define routes for various resources
app.use("/api/v1/brands", brandRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/products", productRoutes);

// Serve static assets from the client/dist directory
app.set("etag", false);
app.use(express.static("client/dist"));

// Handle client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

module.exports = app;
