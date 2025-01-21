// server\application\api\router.cjs

const express = require("express");
const apiRouter = express.Router();

const folderRouter = require("./folder/router.cjs");

apiRouter.use("/folder", folderRouter);

module.exports = apiRouter;
