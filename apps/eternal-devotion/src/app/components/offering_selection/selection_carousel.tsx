import { useRef, useState, useEffect, useCallback, ReactNode } from 'react';

import styles from './selection_layout.module.scss';

type Props = {
  children: ReactNode;
};

const SelectionCarousel = ({ children }: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const startSentinelRef = useRef<HTMLDivElement>(null);
  const endSentinelRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showStartFade, setShowStartFade] = useState(false);
  const [showEndFade, setShowEndFade] = useState(true);

  const updateArrowVisibility = useCallback(() => {
    if (!carouselRef.current) return;

    const isHorizontal = window.innerWidth > 600;

    if (isHorizontal) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    } else {
      const { scrollTop, scrollHeight, clientHeight } = carouselRef.current;
      setShowLeftArrow(scrollTop > 10);
      setShowRightArrow(scrollTop < scrollHeight - clientHeight - 10);
    }
  }, []);

  useEffect(() => {
    updateArrowVisibility();
    window.addEventListener('resize', updateArrowVisibility);
    return () => window.removeEventListener('resize', updateArrowVisibility);
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
        threshold: 1.0
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

  const handleScroll = (direction: 'prev' | 'next') => {
    if (!carouselRef.current) return;

    const isHorizontal = window.innerWidth > 600;
    const scrollAmount = isHorizontal
      ? carouselRef.current.clientWidth
      : carouselRef.current.clientHeight;

    if (isHorizontal) {
      carouselRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    } else {
      carouselRef.current.scrollBy({
        top: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      className={styles.carouselContainer}
      data-fade-end={showEndFade}
      data-fade-start={showStartFade}
    >
      <div
        className={styles.carouselTrack}
        onScrollEnd={updateArrowVisibility}
        ref={carouselRef}
      >
        <div className={styles.sentinel} ref={startSentinelRef} />
        {children}
        <div className={styles.sentinel} ref={endSentinelRef} />
      </div>
      <div className={styles.arrows}>
        {showLeftArrow && (
          <button
            aria-label="Previous card"
            className={styles.arrow}
            onClick={() => handleScroll('prev')}
          >
            ←
          </button>
        )}
        {showRightArrow && (
          <button
            aria-label="Next card"
            className={styles.arrow}
            onClick={() => handleScroll('next')}
          >
            →
          </button>
        )}
      </div>
    </div>
  );
};

export default SelectionCarousel;
