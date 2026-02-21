import { useRef, useState, useEffect, useCallback } from 'react';

export const useCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const startSentinelRef = useRef<HTMLDivElement>(null);
  const endSentinelRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showStartFade, setShowStartFade] = useState(false);
  const [showEndFade, setShowEndFade] = useState(true);

  const updateArrowVisibility = useCallback(() => {
    if (!carouselRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setShowLeftArrow(scrollLeft > 10);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    updateArrowVisibility();
    window.addEventListener('resize', updateArrowVisibility);
    return () => {
      window.removeEventListener('resize', updateArrowVisibility);
    };
  }, [updateArrowVisibility]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === startSentinelRef.current) {
            setShowStartFade(!entry.isIntersecting);
          } else if (entry.target === endSentinelRef.current) {
            setShowEndFade(!entry.isIntersecting);
          }
        });
      },
      {
        root: carouselRef.current,
        threshold: 0
      }
    );

    if (startSentinelRef.current) {
      observer.observe(startSentinelRef.current);
    }
    if (endSentinelRef.current) {
      observer.observe(endSentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleScroll = useCallback((direction: 'prev' | 'next') => {
    if (!carouselRef.current) return;

    const scrollAmount =
      carouselRef.current.querySelector('[data-card]')!.clientWidth;
    carouselRef.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  }, []);

  return {
    carouselRef,
    startSentinelRef,
    endSentinelRef,
    showLeftArrow,
    showRightArrow,
    showStartFade,
    showEndFade,
    updateArrowVisibility,
    handleScroll
  };
};
