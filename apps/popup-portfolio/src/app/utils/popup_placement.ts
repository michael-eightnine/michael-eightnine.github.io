import { sleep } from 'utils';

const DEFAULT_TRANSITION_DURATION = 500;

export const getSectionCoordinates = (headerHeight = 0) => {
  // Get the viewport dimensions in pixels
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const withinSmallViewport = viewportWidth < 700;

  // Add buffer to ensure the element's edges are not too close to the viewport edges
  const buffer = 24;

  // Convert vh ranges to pixel values for width and height
  const minHeight =
    (withinSmallViewport ? 55 / 100 : 45 / 100) * viewportHeight;
  const maxHeight =
    (withinSmallViewport ? 75 / 100 : 66.66 / 100) * viewportHeight;

  const minWidth = (withinSmallViewport ? 70 / 100 : 35 / 100) * viewportWidth;
  const maxWidth = (withinSmallViewport ? 90 / 100 : 45 / 100) * viewportWidth;

  // Generate randomized dimensions within the specified ranges
  // But use `Math.min` to ensure these dimensions do not extend outside of the available space
  const height = Math.min(
    Math.random() * (maxHeight - minHeight) + minHeight,
    viewportHeight - buffer * 2 - headerHeight
  );
  const width = Math.min(
    Math.random() * (maxWidth - minWidth) + minWidth,
    viewportWidth - buffer * 2
  );

  // Calculate top placement:
  // Element must be placed below the header, and top must be at least 24px from the header
  const minTop = headerHeight + buffer;
  const maxTop = viewportHeight - height - buffer; // Prevent bottom overflow and keep buffer from the bottom
  const top = Math.random() * (maxTop - minTop) + minTop;

  // Calculate left placement:
  // Element's left edge must be at least 24px from the left side of the viewport
  const maxLeft = viewportWidth - width - buffer; // Prevent right overflow and keep buffer from the right
  const left = Math.random() * (maxLeft - buffer) + buffer; // Ensure left edge has a buffer of 24px

  return {
    height,
    left,
    top,
    width
  };
};

type TransitionCoordinates = {
  height: number;
  left: number;
  top: number;
  width: number;
};

export const transitionElement = async ({
  element,
  from,
  to,
  transitionStyle,
  duration = DEFAULT_TRANSITION_DURATION
}: {
  element: HTMLElement;
  from: TransitionCoordinates;
  to: TransitionCoordinates;
  transitionStyle: string;
  duration?: number;
}): Promise<void> => {
  if (!element) {
    return;
  }

  // Apply initial styles
  element.style.top = `${from.top}px`;
  element.style.left = `${from.left}px`;
  element.style.width = `${from.width}px`;
  element.style.height = `${from.height}px`;
  element.style.transition = transitionStyle;

  // Force a reflow to ensure styles are applied before transitioning
  element.getBoundingClientRect();

  // Set the target styles
  element.style.top = `${to.top}px`;
  element.style.left = `${to.left}px`;
  element.style.width = `${to.width}px`;
  element.style.height = `${to.height}px`;

  // Cubic bezier easing causes a `onTransitionEnd` event listener to be unreliable, as the animated element technically returns to its original
  // size in the middle of the transition. A timeout, potentially less accurate, avoids this scenario and is sufficient for this use case
  await sleep(duration);
};

export const getTransitionStyle = (
  isOpening: boolean,
  duration = DEFAULT_TRANSITION_DURATION
) => {
  const openingEase = 'cubic-bezier(0.3, 1.2, 0.68, 1.15)';
  const closingEase = 'cubic-bezier(0.68, -0.55, 0.9, 0.3)';
  const properties = ['top', 'left', 'height', 'width', 'box-shadow'];

  const createStyle = (ease: string) => {
    return properties
      .map((propertyName) => `${propertyName} ${duration}ms ${ease}`)
      .join(', ');
  };

  return createStyle(isOpening ? openingEase : closingEase);
};
