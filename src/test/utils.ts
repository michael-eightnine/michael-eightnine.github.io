export const getSectionCoordinates = (headerHeight = 0) => {
  // Get the viewport dimensions in pixels
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  console.log('headerHeight', headerHeight);
  // Convert vh ranges to pixel values for width and height
  const minHeight = (45 / 100) * viewportHeight;
  const maxHeight = (66.66 / 100) * viewportHeight;

  const minWidth = (35 / 100) * viewportWidth; // Width is based on vh
  const maxWidth = (45 / 100) * viewportWidth;

  // Generate randomized dimensions within the specified ranges
  const height = Math.random() * (maxHeight - minHeight) + minHeight;
  const width = Math.random() * (maxWidth - minWidth) + minWidth;

  // Calculate top placement
  const minTop = headerHeight + 32; // Minimum top placement
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

export function transitionElement({
  element,
  from,
  to,
  transitionStyle,
  duration = 500
}: {
  element: HTMLElement;
  from: TransitionCoordinates;
  to: TransitionCoordinates;
  transitionStyle: string;
  duration?: number;
}): Promise<void> {
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
    element.style.transition = transitionStyle;

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

export const getTransitionStyle = (isOpening: boolean, duration = 500) => {
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
