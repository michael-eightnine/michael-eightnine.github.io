import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.join(__dirname, '../public/dice');

fs.readdir(INPUT_DIR, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  // Filter out only image files
  const imageFiles = files.filter(file => path.extname(file).toLowerCase() === '.jpg');

  // Sort files to maintain order
  imageFiles.sort();

  imageFiles.forEach((file, index) => {
    const ext = path.extname(file);
    const newFileName = `${index + 1}${ext}`;
    const oldPath = path.join(INPUT_DIR, file);
    const newPath = path.join(INPUT_DIR, newFileName);

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.error(`Error renaming ${file}:`, err);
      } else {
        console.log(`${file} -> ${newFileName}`);
      }
    });
  });
});
