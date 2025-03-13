import { useCallback, useState, useEffect, useMemo } from 'react';

type Coordinates = {
  left: number;
  top: number;
};

/**
 * Handles coordinating and attaching event listeners to enable a popup to be dragged and dropped
 * into a new position
 */
const useDraggablePopup = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [placementCoordinates, setPlacementCoordinates] =
    useState<Coordinates | null>(null);
  const [pickupOffset, setPickupOffset] = useState<Coordinates>({
    left: 0,
    top: 0
  });

  // When dragging begins, update the state indicator and set the pickup offset for use
  // when determining the new position during dragging. Without this offset, the coordinates would
  // be the top left of the popup rather than the mousedown point
  const handleDragStart = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!placementCoordinates) return;

      setIsDragging(true);
      setPickupOffset({
        left: event.clientX - placementCoordinates.left,
        top: event.clientY - placementCoordinates.top
      });
    },
    [placementCoordinates]
  );

  // On drag, update the placement coordinates
  const handleDrag = useCallback(
    (event: MouseEvent) => {
      if (isDragging) {
        setPlacementCoordinates({
          left: event.clientX - pickupOffset.left,
          top: event.clientY - pickupOffset.top
        });
      }
    },
    [isDragging, pickupOffset.left, pickupOffset.top]
  );

  const handleDragDrop = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Bind event listeners when dragging begins, unbind when dragging ends and as a cleanup function
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleDrag);
      window.addEventListener('mouseup', handleDragDrop);
      document.body.classList.add('no-select');
    } else {
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('mouseup', handleDragDrop);
      document.body.classList.remove('no-select');
    }
    return () => {
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('mouseup', handleDragDrop);
      document.body.classList.remove('no-select');
    };
  }, [handleDrag, handleDragDrop, isDragging]);

  // If no placement coordinates are available an empty object is returned, as this memoized object is spread as
  // a `style` prop on the popup. This is critical as if coordinates of `0, 0` were used as a placeholder rather than `null`
  // the initial "opening" transition of the popup have inaccurate source coordinates
  const placementStyle = useMemo(() => {
    if (!placementCoordinates) return {};

    return {
      top: `${placementCoordinates.top}px`,
      left: `${placementCoordinates.left}px`
    };
  }, [placementCoordinates]);

  return {
    handleDragStart,
    isDragging,
    placementStyle,
    setPlacementCoordinates
  };
};

export default useDraggablePopup;
