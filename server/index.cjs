// server\index.cjs

const dotenv = require("dotenv");
dotenv.config();

const application = require("./application/app.cjs");

// eslint-disable-next-line no-undef
const PORT = process.env.APPLICATION_PORT || 3000;

application
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
  .on("error", (error) => {
    console.error(error);
  });
