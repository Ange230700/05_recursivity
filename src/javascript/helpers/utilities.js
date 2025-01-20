// src\javascript\helpers\utilities.js

function printFolder(folder) {
  if (folder?.content && Array.isArray(folder.content)) {
    console.log(`🗂️ ${folder.name}`);
  }
}

export { printFolder };
