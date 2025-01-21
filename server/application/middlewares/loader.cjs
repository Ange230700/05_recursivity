// server\application\middlewares\loader.cjs

const cors = require("cors");

const allowCredentials = require("./allowCredentials.cjs");
const corsOptions = require("../configurations/cors/options.cjs");

const loadMiddlewares = (application) => {
  application.use(cors(corsOptions));
  application.use(allowCredentials);
};

module.exports = loadMiddlewares;
