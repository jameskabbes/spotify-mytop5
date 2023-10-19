import demoData from '../demo.json';

function generateDemoData(entity, limit) {

  // Copy the original list to avoid modifying it
  const copyList = [...demoData[entity]];

  // Shuffle the list using Fisher-Yates algorithm
  for (let i = copyList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copyList[i], copyList[j]] = [copyList[j], copyList[i]];
  }

  // return the first {limit} items
  return copyList.slice(0, limit);
}

export { generateDemoData };
