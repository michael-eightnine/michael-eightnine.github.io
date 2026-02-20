import { ReactNode } from 'react';

import { useCarousel } from './use_carousel';
import styles from './selection_layout.module.scss';

type Props = {
  children: ReactNode;
};

const SelectionCarousel = ({ children }: Props) => {
  const {
    carouselRef,
    startSentinelRef,
    endSentinelRef,
    showLeftArrow,
    showRightArrow,
    showStartFade,
    showEndFade,
    updateArrowVisibility,
    handleScroll
  } = useCarousel();

  return (
    <section
      aria-label="Offering selection"
      aria-roledescription="carousel"
      className={styles.carouselContainer}
      data-fade-end={showEndFade}
      data-fade-start={showStartFade}
    >
      <div
        className={styles.carouselTrack}
        onScrollEnd={updateArrowVisibility}
        ref={carouselRef}
      >
        <div
          aria-hidden="true"
          className={styles.sentinel}
          ref={startSentinelRef}
        />
        {children}
        <div
          aria-hidden="true"
          className={styles.sentinel}
          ref={endSentinelRef}
        />
      </div>
      {(showRightArrow || showLeftArrow) && (
        <div className={styles.arrows}>
          <button
            aria-label={showRightArrow ? 'Next offering' : 'Previous offering'}
            className={styles.arrow}
            onClick={() => handleScroll(showRightArrow ? 'next' : 'prev')}
            type="button"
          >
            {showRightArrow ? '→' : '←'}
          </button>
        </div>
      )}
    </section>
  );
};

export default SelectionCarousel;
