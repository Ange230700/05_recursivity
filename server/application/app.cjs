// server\application\app.cjs

const express = require("express");
const path = require("path");

const loadMiddlewares = require("./middlewares/loader.cjs");
const handleErrors = require("./errors/handler.cjs");
const apiRouter = require("./api/router.cjs");

const app = express();

app.use(express.json());

loadMiddlewares(app);

app.use("/api", apiRouter);

// eslint-disable-next-line no-undef
app.get("*.*", express.static(path.join(__dirname, "..", "..", "public")));

app.get("*", (_, response) => {
  response.sendFile(
    // eslint-disable-next-line no-undef
    path.join(path.join(__dirname, "../../client/build"), "index.html"),
  );
});

app.use(handleErrors);

module.exports = app;
