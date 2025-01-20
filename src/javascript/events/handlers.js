// src\javascript\events\handlers.js

import {
  printExhaustiveFolderContent,
  printExhaustiveFolderContentUsingRecursion,
} from "../helpers/utilities.js";
import mainFolder from "../data/mainFolder.js";
import rootFolder from "../data/rootFolder.js";

const handleLoadingOfDomContent = () => {
  console.log("Iteration");
  printExhaustiveFolderContent(mainFolder);
  console.log("\n\nRecursion");
  printExhaustiveFolderContentUsingRecursion(mainFolder);
  console.log("\n\n\n\n\n\n\n\n");
  console.log("Iteration");
  printExhaustiveFolderContent(rootFolder);
  console.log("\n\nRecursion");
  printExhaustiveFolderContentUsingRecursion(rootFolder);
};

export { handleLoadingOfDomContent };
