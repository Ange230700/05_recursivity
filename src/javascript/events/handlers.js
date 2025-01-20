// src\javascript\events\handlers.js

import {
  printExhaustiveFolderContent,
  printExhaustiveFolderContentUsingRecursion,
} from "../helpers/utilities.js";
import mainFolder from "../data/mainFolder.js";

const handleLoadingOfDomContent = () => {
  console.log("Iteration");
  printExhaustiveFolderContent(mainFolder);
  console.log("\n\nRecursion");
  printExhaustiveFolderContentUsingRecursion(mainFolder);
};

export { handleLoadingOfDomContent };
