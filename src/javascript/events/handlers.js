// src\javascript\events\handlers.js

import { printFolder } from "../helpers/utilities.js";
import mainFolder from "../data/mainFolder.js";

const handleLoadingOfDomContent = () => {
  printFolder(mainFolder);
};

export { handleLoadingOfDomContent };
