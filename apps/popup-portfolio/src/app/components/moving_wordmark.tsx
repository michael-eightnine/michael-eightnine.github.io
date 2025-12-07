import { useEffect, useRef, useState } from 'react';

import { Wordmark } from 'svg';
import { isTouchDevice } from 'utils';

type Props = {
  className: string;
};

function MovingWordmark({ className }: Props) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [movingDisabled, setMovingDisabled] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    let animationFrameId: number | null = null;

    const handleMouseMove = (event: MouseEvent) => {
      if (!element) return;

      const rect = element.getBoundingClientRect();

      // Calculate the center of the element
      const elementCenterX = rect.left + rect.width / 2;
      const elementCenterY = rect.top + rect.height / 2;

      // Get the vector from the mouse to the element
      const dx = elementCenterX - event.clientX;
      const dy = elementCenterY - event.clientY;

      // Normalize the vector to get the direction and scale by an offset
      const magnitude = Math.sqrt(dx * dx + dy * dy) || 1; // Prevent division by 0
      // Scale the direction by a vector of 75
      const offsetX = (dx / magnitude) * 75;
      const offsetY = (dy / magnitude) * 75;

      // Use requestAnimationFrame to update the element's position smoothly
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
          if (element) {
            element.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
          }
          animationFrameId = null;
        });
      }
    };

    const cleanup = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    // Don't bind mousemove if on mobile and cleanup any previously bound listeners
    if (movingDisabled || !element) {
      cleanup();
      return cleanup;
    }

    // Attach mousemove event listener
    document.addEventListener('mousemove', handleMouseMove);

    return cleanup;
  }, [movingDisabled]);

  // Handles initializing a resize observer as the wordmark should not respond to mouse move events on smaller viewports
  useEffect(() => {
    const handleResize = () => {
      const onTouchDevice = isTouchDevice();
      const isSmallViewport = window.innerWidth < 700;
      setMovingDisabled(onTouchDevice || isSmallViewport);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    resizeObserver.observe(document.body);

    // Initial check
    handleResize();

    // Disconnect on unmount
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className={className} ref={elementRef}>
      <Wordmark />
    </div>
  );
}

export default MovingWordmark;
