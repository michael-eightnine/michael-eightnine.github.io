import sharp from 'sharp';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.join(__dirname, '../public/original_assets');
const OUTPUT_DIR = path.join(__dirname, '../public/optimized_images');

const SIZES =  [320, 420, 640, 940, 1280, 1920];

async function processImages() {
  await fs.ensureDir(OUTPUT_DIR);
  await fs.emptyDir(OUTPUT_DIR);

  const files = await fs.readdir(INPUT_DIR);
  const imageFiles = files.filter((file) => /\.tif$/i.test(file));

  for (const file of imageFiles) {
    const inputPath = path.join(INPUT_DIR, file);
    const fileNameWithoutExt = path.parse(file).name;

    for (const size of SIZES) {
      const filePathAndName = `${OUTPUT_DIR}/${fileNameWithoutExt}-${size}`
      await sharp(inputPath)
        .resize(size)
        .toFormat('avif', { quality: 50 })
        .toFile(`${filePathAndName}.avif`);

      await sharp(inputPath)
        .resize(size)
        .toFormat('webp', { quality: 80 })
        .toFile(`${filePathAndName}.webp`);
    }
    console.log(`Processed ${fileNameWithoutExt}`)
  }

  return imageFiles.length;
}

processImages()
  .then((count) =>
    console.log(`Generation complete for ${count} source images.`)
  )
  .catch((err) => console.error('Error processing images:', err));
