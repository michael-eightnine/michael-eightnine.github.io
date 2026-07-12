import { useCallback, useState } from 'react';

import {
  BeautifulBodyLayout,
  SliceIndicator,
  randomizeSlots
} from 'components/beautiful-body';

import styles from './beautiful_body.module.scss';

const BeautifulBody = () => {
  // Shared slice state lives at the route so the body and the floating indicator
  // (rendered as siblings into main, like the offering page) stay in sync.
  const [slots, setSlots] = useState<number[]>(randomizeSlots);

  const randomize = useCallback(() => setSlots(randomizeSlots()), []);

  return (
    <>
      <BeautifulBodyLayout onRandomize={randomize} slots={slots} />
      <SliceIndicator
        className={styles.indicator}
        values={slots.map((index) => index + 1)}
      />
    </>
  );
};

export default BeautifulBody;
