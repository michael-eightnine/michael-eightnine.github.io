export const getSectionCoordinates = () => {
  // Get the viewport dimensions in pixels
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Convert vh ranges to pixel values for width and height
  const minHeight = (45 / 100) * viewportHeight;
  const maxHeight = (60 / 100) * viewportHeight;

  const minWidth = (50 / 100) * viewportHeight; // Width is based on vh
  const maxWidth = (66 / 100) * viewportHeight;

  // Generate randomized dimensions within the specified ranges
  const height = Math.random() * (maxHeight - minHeight) + minHeight;
  const width = Math.random() * (maxWidth - minWidth) + minWidth;

  // Calculate top placement
  const minTop = (25 / 100) * viewportHeight; // Minimum top placement
  const maxTop = viewportHeight - height; // Prevent bottom overflow
  const top = Math.random() * (maxTop - minTop) + minTop;

  // Calculate left placement
  const maxLeft = viewportWidth - width; // Prevent right overflow
  const left = Math.random() * maxLeft;

  return {
    width,
    height,
    top,
    left
  };
};

type TransitionCoordinates = {
  top: number;
  left: number;
  width: number;
  height: number;
};

export function transitionElement(
  element: HTMLElement,
  from: TransitionCoordinates,
  to: TransitionCoordinates,
  transition: string = 'cubic-bezier(0.3, 1.2, 0.68, 1.15)', // default easing function
  duration: number = 500, // default duration in milliseconds
): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!element) {
      reject(new Error('Invalid element provided.'));
      return;
    }

    // Apply initial styles
    element.style.position = 'absolute';
    element.style.top = `${from.top}px`;
    element.style.left = `${from.left}px`;
    element.style.width = `${from.width}px`;
    element.style.height = `${from.height}px`;
    element.style.transition = transition;

    // Force a reflow to ensure styles are applied before transitioning
    element.getBoundingClientRect();

    // Set the target styles
    element.style.top = `${to.top}px`;
    element.style.left = `${to.left}px`;
    element.style.width = `${to.width}px`;
    element.style.height = `${to.height}px`;

    // Wait for the transition to finish
    const handleTransitionEnd = () => {
      element.removeEventListener('transitionend', handleTransitionEnd);
      resolve();
    };

    element.addEventListener('transitionend', handleTransitionEnd);

    // Fallback in case the transitionend event is not fired
    setTimeout(() => {
      element.removeEventListener('transitionend', handleTransitionEnd);
      resolve();
    }, duration + 100);
  });
}
