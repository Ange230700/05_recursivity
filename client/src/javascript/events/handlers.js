// client\src\javascript\events\handlers.js

import { displayApp } from "../document/manipulation.js";

const handleLoadingOfDomContent = () => {
  displayApp().then(() => null);
};

export { handleLoadingOfDomContent };
