import { useEffect, useMemo, useState } from 'react';

import { classnames } from 'utils';

import styles from './nav.module.scss';

type Props = {
  onAnimationEnd: () => void;
};

const TITLE_COPY = 'Building good things well.';

const AnimatedTitle = ({ onAnimationEnd }: Props) => {
  const [displayText, setDisplayText] = useState('');
  const animationComplete = useMemo(
    () => displayText.length === TITLE_COPY.length,
    [displayText.length]
  );

  useEffect(() => {
    if (displayText.length === TITLE_COPY.length) return; // Exit if all characters are typed

    // Increment displayText by one character per delay, simulating a typing effect
    // The initial delay is longer and following delays are slightly randomized within a range
    const timeoutId = setTimeout(
      () => {
        setDisplayText((prev) => {
          const updatedDisplayText = prev + TITLE_COPY[prev.length];
          return updatedDisplayText;
        });
      },
      displayText.length === 0 ? 750 : 75
    );

    return () => clearTimeout(timeoutId); // Clear timeout on cleanup
  }, [displayText, onAnimationEnd]);

  useEffect(() => {
    if (animationComplete) {
      onAnimationEnd();
    }
  }, [animationComplete, onAnimationEnd]);

  return (
    <>
      <h1 className={classnames(styles.animatedTitle)}>
        {displayText}
        {!animationComplete && <span className={styles.typingIndicator} />}
      </h1>
    </>
  );
};

export default AnimatedTitle;
