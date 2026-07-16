import { useCallback, useState } from 'react';

import {
  BeautifulBodyLayout,
  SliceIndicator,
  randomizeSlots,
  sliceFilenames,
  sliceCharacterNames,
  sliceLabels,
  saveBody
} from 'components/beautiful-body';

import styles from './beautiful_body.module.scss';

const BeautifulBody = () => {
  // Shared slice state lives at the route so the body and the floating indicator
  // (rendered as siblings into main, like the offering page) stay in sync.
  const [slots, setSlots] = useState<number[]>(randomizeSlots);

  const randomize = useCallback(() => setSlots(randomizeSlots()), []);

  const save = useCallback(() => {
    const downloadName = `${sliceCharacterNames(slots).join('-')}.png`;
    void saveBody(sliceFilenames(slots), downloadName);
  }, [slots]);

  return (
    <>
      <BeautifulBodyLayout
        onRandomize={randomize}
        onSave={save}
        slots={slots}
      />
      <SliceIndicator
        className={styles.indicator}
        labels={sliceLabels(slots)}
      />
    </>
  );
};

export default BeautifulBody;
