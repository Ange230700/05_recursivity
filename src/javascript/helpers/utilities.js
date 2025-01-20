// src\javascript\helpers\utilities.js

function printFolder(folder, isRoot = false, depth = 0) {
  const indent = "  ".repeat(depth);

  if (isRoot) {
    console.log(`> ${indent}🗂️  ${folder.name}`);
  } else {
    console.log(`  ${indent}🗂️  ${folder.name}`);
  }
}

function printFile(file, depth = 0) {
  const indent = "  ".repeat(depth);
  console.log(`  ${indent}📑 ${file?.name}`);
}

function printExhaustiveFolderContent(folder) {
  const stack = [{ item: folder, depth: 0, isRoot: true }];

  while (stack.length > 0) {
    const { item: currentItem, depth, isRoot } = stack.pop();

    if (currentItem?.content && Array.isArray(currentItem.content)) {
      printFolder(currentItem, isRoot, depth);

      for (let index = currentItem.content.length - 1; index >= 0; index--) {
        const child = currentItem.content[index];
        stack.push({ item: child, depth: depth + 1, isRoot: false });
      }
    } else {
      printFile(currentItem, depth);
    }
  }
}

function printExhaustiveFolderContentUsingRecursion(
  folder,
  depth = 0,
  isRoot = true,
) {
  if (folder?.content && Array.isArray(folder.content)) {
    printFolder(folder, isRoot, depth);

    folder.content.forEach((child) => {
      printExhaustiveFolderContentUsingRecursion(child, depth + 1, false);
    });
  } else {
    printFile(folder, depth);
  }
}

export {
  printExhaustiveFolderContent,
  printExhaustiveFolderContentUsingRecursion,
};
