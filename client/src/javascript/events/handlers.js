// client\src\javascript\events\handlers.js

import { printExhaustiveFolderContentUsingRecursion } from "../helpers/utilities.js";

const handleLoadingOfDomContent = () => {
  fetch(`${import.meta.env.VITE_API_URL}/api/folder`)
    .then((response) => response.json())
    .then((folderData) => {
      printExhaustiveFolderContentUsingRecursion(folderData);
    })
    .catch((error) => {
      console.error("Failed to fetch folder structure:", error);
    });
};

export { handleLoadingOfDomContent };
