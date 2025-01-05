import { MutableRefObject } from 'react';
import { sleep } from 'utils';

import styles from '../section/section.module.scss';

export const animateBetweenPortals = async ({
  sourcePortal,
  destinationPortal,
  animationDuration = 1000
}: {
  sourcePortal: HTMLElement;
  destinationPortal: HTMLElement;
  animationDuration?: number;
}) => {
  if (!sourcePortal || !destinationPortal) {
    return;
  }

  // Get the positions of the component in source and destination portals
  const sourceRect = sourcePortal.firstChild.getBoundingClientRect();
  const destinationRect = destinationPortal.getBoundingClientRect();

  const destinationWidth = 48;
  const destinationHeight = 48;
  const scaleX = destinationWidth / sourceRect.width;
  const scaleY = destinationHeight / sourceRect.height;
  const newWidth = sourceRect.width * scaleX;
  const newHeight = sourceRect.height * scaleY;

  // Calculate offsets to correctly position the section after scaling
  const offsetX = (newWidth - sourceRect.width) / 2;
  const offsetY = (newHeight - sourceRect.height) / 2;
  const translateX = destinationRect.left - sourceRect.left + offsetX;
  const translateY = destinationRect.top - sourceRect.top + offsetY;

  // Create a clone for the animation
  const sourceNode = sourcePortal.firstChild as HTMLElement | null;
  if (!sourceNode) return;

  const clone = sourceNode.cloneNode(true) as HTMLElement;
  clone.style.position = 'absolute';
  clone.style.left = `${sourceRect.left}px`;
  clone.style.top = `${sourceRect.top}px`;
  clone.style.width = `${sourceRect.width}px`;
  clone.style.height = `${sourceRect.height}px`;
  clone.style.transition =
    'transform 1s cubic-bezier(0.68, -0.55, 0.9, 0.3), opacity 1s';
  // clone.style.transformOrigin = 'top left'; // Important for proper scaling
  clone.style.zIndex = '1000'; // Ensure it's on top of everything

  // Append the clone to the body and hide the source node
  document.body.appendChild(clone);
  sourceNode.style.opacity = '0';

  setTimeout(() => {
    clone.classList.add(styles.section__closing);
  }, 100);

  // Trigger the animation
  requestAnimationFrame(() => {
    clone.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`;
  });

  // After the animation ends, remove the clone and switch portals
  await sleep(animationDuration);

  // NOTE: Could we just make the "main" content area also a fixed dimension?
  // That way we can reference the size of that zone rather than try to piece together the original main content position
  const reverseCoordinates = {
    left: sourceRect.left * scaleX - destinationRect.left,
    top: sourceRect.top * scaleY - destinationRect.top
  };

  document.body.removeChild(clone);
  return reverseCoordinates;
};

export const getPortals = () => {
  return {
    main: document.getElementById('main-portal')!,
    dock: document.getElementById('dock-portal')!
  };
};
