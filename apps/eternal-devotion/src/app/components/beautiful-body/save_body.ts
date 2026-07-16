import { createContentPathname } from 'content';

const loadImage = (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });

// Composites the ordered body-slice filenames (top, mid, bottom) into a single
// stacked PNG and triggers a download. Loads fresh high-res sources and sizes
// the canvas from the images' own dimensions, so the saved image is consistent
// regardless of the on-screen render size (this is a responsive layout) and
// robust to the source assets changing dimensions.
export const saveBody = async (
  sliceFilenames: string[],
  downloadName = 'a-beautiful-body.png'
): Promise<void> => {
  const images = await Promise.all(
    sliceFilenames.map((filename) =>
      loadImage(createContentPathname(`${filename}-1280.webp`, 'painting'))
    )
  );

  // Canvas width = the widest slice; height = the sum of slice heights, so the
  // pieces stack flush exactly as they do on screen.
  const width = Math.max(...images.map((img) => img.naturalWidth));
  const height = images.reduce((sum, img) => sum + img.naturalHeight, 0);

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext('2d');
  if (!context) return;

  let offsetY = 0;
  images.forEach((img) => {
    context.drawImage(img, 0, offsetY, width, img.naturalHeight);
    offsetY += img.naturalHeight;
  });

  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, 'image/png')
  );
  if (!blob) return;

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = downloadName;
  link.click();
  URL.revokeObjectURL(url);
};
