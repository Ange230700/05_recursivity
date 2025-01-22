// src/javascript/document/manipulation.js

import { generateHeader, generateFooter } from "../components/functional.js";

/**
 * Builds a DOM structure of nested <details> (accordions) for folder data
 * and <li> elements for files. Each folder is a <details> with a <summary>,
 * and inside is a nested <ul> of either more folders or files.
 *
 * @param {Object} folder - A folder object with a 'name' and optional 'content' array.
 * @param {Number} depth - The nesting depth, useful if you want to indent or style differently.
 * @param {Boolean} isRoot - Indicates whether the folder is the root folder.
 * @returns {HTMLElement} - The <details> element representing the folder.
 */
function createFolderAccordion(folder, depth = 0, isRoot = true) {
  const detailsEl = document.createElement("details");
  const summaryEl = document.createElement("summary");
  const chevronIcon = document.createElement("img");

  // Add a chevron icon to the summary
  chevronIcon.classList.add("chevron-icon");
  chevronIcon.src = `${import.meta.env.VITE_API_URL}/chevron.svg`;

  // Label for the folder
  summaryEl.textContent = `🗂️ ${folder.name}`;

  // (Optional) Indent styling or a left margin if you want to visualize nesting:
  summaryEl.style.marginLeft = `${depth * 1.25}rem`;

  detailsEl.appendChild(summaryEl);
  summaryEl.insertAdjacentElement("afterbegin", chevronIcon);

  // Create a <ul> to hold the folder's contents (sub-folders/files)
  if (folder?.content && Array.isArray(folder.content)) {
    const ulEl = document.createElement("ul");

    folder.content.forEach((child) => {
      const liEl = document.createElement("li");

      if (child?.content && Array.isArray(child.content)) {
        // child is a sub-folder
        liEl.appendChild(createFolderAccordion(child, depth + 1, false));
      } else {
        // child is a file
        liEl.appendChild(createFileElement(child, depth + 1));
      }

      ulEl.appendChild(liEl);
    });

    detailsEl.appendChild(ulEl);

    // Optionally open the root folder by default
    if (isRoot) {
      detailsEl.open = true;
    }
  }

  return detailsEl;
}

/**
 * Creates a simple element to represent a file.
 *
 * @param {Object} file - A file object with a 'name'.
 * @param {Number} depth - The nesting depth.
 * @returns {HTMLElement} - The DOM element representing the file.
 */
function createFileElement(file, depth = 0) {
  const spanEl = document.createElement("span");

  // Indent if you prefer, e.g.:
  spanEl.style.marginLeft = `${depth * 1.25}rem`;

  spanEl.textContent = `📑 ${file.name}`;
  return spanEl;
}

/**
 * Entry point: Builds the entire folder structure and appends it to a container.
 *
 * @param {Object} folderData - The root folder object returned from the API.
 * @param {HTMLElement} container - The DOM element (e.g., #app) to which the structure is appended.
 */
function buildFolderStructure(folderData, container) {
  const accordion = createFolderAccordion(folderData, 0, true);
  container.appendChild(accordion);
}

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

  appContainer.insertAdjacentHTML("afterbegin", generateHeader());

  appContainer.innerHTML += `${generateFooter()}`;
}

function showLoadingMessage(appContainer) {
  // Show a basic loading message or spinner
  appContainer.innerHTML = `
    <div class="loading" style="margin: auto 0;">
      <p>Loading folder structure...</p>
    </div>
  `;
}

function showErrorMessage(appContainer, error) {
  // Show an error message in the UI
  appContainer.innerHTML = `
      <div class="error">
        <p>${error.message}</p>
        <p>Failed to load data. Please try again later.</p>
      </div>
    `;
}

async function displayApp() {
  const appContainer = document.getElementById("app");

  showLoadingMessage(appContainer);

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/folder`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const folderData = await response.json();

    printExhaustiveFolderContentUsingRecursion(folderData);
  } catch (error) {
    console.error("Failed to fetch folder structure:", error);
    showErrorMessage(appContainer, error);
  }
}

export { displayApp };
