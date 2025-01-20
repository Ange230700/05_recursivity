// src\javascript\events\handlers.js

import { printExhaustiveFolderContent } from "../helpers/utilities.js";
import mainFolder from "../data/mainFolder.js";

const handleLoadingOfDomContent = () => {
  printExhaustiveFolderContent(mainFolder);
};

export { handleLoadingOfDomContent };
