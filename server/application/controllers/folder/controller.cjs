// server\application\controllers\folder\controller.cjs

const path = require("node:path");
const { getFolderStructure } = require("../../utilities/helpers.cjs");

const readFolder = (request, response, next) => {
  try {
    const folderStructure = getFolderStructure(
      // eslint-disable-next-line no-undef
      path.resolve(__dirname, "../../../../"),
    );

    response.json(folderStructure);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  readFolder,
};
