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

// Connect with MongoDb
mongoose
  .connect(config.database.uri, {})
  .then(() => console.log("Mongodb connected successfully"))
  .catch((error) => console.error("Mongodb connection error: ", error));

const app = express();
app.use(morgan("dev"));
// Security middleware
app.use(helmet());
app.use(cors());
app.use(hpp());

//Body parsers
app.use(cookieParser());
app.use(mongoSanitize());

//Configure request body limits
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Rate limiting middleware
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

// Routing middlewares
app.use("/api/v1/brands", brandRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/products", productRoutes);

// Static asset  serving
app.set("etag", false);
app.use(express.static("client/dist"));

// Handle CLIENT SIDE ROUTING
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.js"));
});

module.exports = app;
