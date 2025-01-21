// client\src\javascript\helpers\utilities.js

import { buildFolderStructure } from "../document/manipulation.js";

/**
 * Replaces the old recursive console-based approach by calling the
 * DOM-based function from 'manipulation.js'.
 */
function printExhaustiveFolderContentUsingRecursion(folderData) {
  // Instead of printing to console, delegate to DOM construction:
  const appContainer = document.getElementById("app");

  // Clear the container or handle if you prefer
  appContainer.innerHTML = "";

  buildFolderStructure(folderData, appContainer);
}

export { printExhaustiveFolderContentUsingRecursion };
