// server\application\utilities\helpers.cjs

const fileSystem = require("node:fs");
const path = require("node:path");

function getFolderStructure(dirPath) {
  const stats = fileSystem.statSync(dirPath);

  if (stats.isDirectory()) {
    const dirName = path.basename(dirPath);
    const children = fileSystem.readdirSync(dirPath);

    const contentArray = children.map((childName) => {
      const childPath = path.join(dirPath, childName);
      return getFolderStructure(childPath);
    });

    return {
      name: dirName,
      content: contentArray,
    };
  } else {
    return {
      name: path.basename(dirPath),
    };
  }
}

module.exports = {
  getFolderStructure,
};
