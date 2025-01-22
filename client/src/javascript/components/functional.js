// client\src\javascript\components\functional.js

function generateHeader() {
  return `
    <header>
      <h1>Directory tree</h1>
    </header>
  `;
}

function generateFooter() {
  return `
    <footer>
      <p>
        Check out the project on
        <strong>
          <a
            href="https://github.com/Ange230700/05_recursivity.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </strong>
      </p>
      <p>
        Check out the API data on
        <strong>
          <a
            href="${import.meta.env.VITE_API_URL}/api/folder"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${import.meta.env.VITE_API_URL}/api/folder
          </a>
        </strong>
      </p>
    </footer>
  `;
}

export { generateHeader, generateFooter };
