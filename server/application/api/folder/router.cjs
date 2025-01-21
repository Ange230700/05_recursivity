// server\application\api\folder\router.cjs

const express = require("express");
const folderRouter = express.Router();

const { readFolder } = require("../../controllers/folder/controller.cjs");

folderRouter.get("/", readFolder);

module.exports = folderRouter;
