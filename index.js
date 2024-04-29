// Import required dependencies
const app = require("./app");
const config = require("./src/config/config");

// Start server
app.listen(config.port, () => {
  console.log(`server is running on: http://localhost:${config.port}`);
});
