// Import required dependencies
const express = require("express");
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const path = require("path");
const config = require("./src/config/config.js");

// Connect with MongoDb
mongoose
  .connect(config.database.uri, {})
  .then(() => console.log("Mongodb connected successfully"))
  .catch((error) => console.error("Mongodb connection error: ", error));

const app = express();

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

//TODO: USE SERVER ROUTING HERE

// Static asset  serving
app.set("etag", false);
app.use(express.static("client/dist"));

// Handle CLIENT SIDE ROUTING
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.js"));
});

module.exports = app;
