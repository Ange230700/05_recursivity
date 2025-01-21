// server\application\middlewares\allowCredentials.cjs

const allowedOrigins = require("../utils/allowedOrigins.cjs");

const allowCredentials = (request, response, next) => {
  const { origin } = request.headers;

  if (allowedOrigins.includes(origin)) {
    response.header("Access-Control-Allow-Origin", origin);
    response.header("Access-Control-Allow-Credentials", true);
  }

  next();
};

module.exports = allowCredentials;
