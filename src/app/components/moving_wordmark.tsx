import { useEffect, useRef } from 'react';

import { Wordmark } from 'svg';

type Props = {
  className: string;
};

function MovingWordmark({ className }: Props) {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (window.innerWidth < 600) return;

    if (!element) return;

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
      const offsetX = (dx / magnitude) * 75; // Scale the direction vector (e.g., 50px)
      const offsetY = (dy / magnitude) * 75;

      // Use requestAnimationFrame to update the element's position smoothly
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
          element.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
          animationFrameId = null;
        });
      }
    };

    // Attach mousemove event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup on unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className={className} ref={elementRef}>
      <Wordmark />
    </div>
  );
}

export default MovingWordmark;
