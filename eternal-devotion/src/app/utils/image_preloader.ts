import { createContentPathname } from 'content';

const preloadedImages = new Set<string>();

export const preloadImage = (filename: string): Promise<void> => {
  return new Promise((resolve) => {
    const imageUrl = createContentPathname(`${filename}-1280.webp`);

    // Skip if already preloaded
    if (preloadedImages.has(imageUrl)) {
      resolve();
      return;
    }

    const img = new Image();
    img.onload = () => {
      preloadedImages.add(imageUrl);
      resolve();
    };
    img.onerror = () => {
      // Still resolve to not block, but don't mark as preloaded
      resolve();
    };
    img.src = imageUrl;
  });
};

export const preloadImages = (filenames: string[]): void => {
  filenames.forEach((filename) => {
    preloadImage(filename).catch(() => {
      // Silently handle errors to not interrupt user experience
    });
  });
};
