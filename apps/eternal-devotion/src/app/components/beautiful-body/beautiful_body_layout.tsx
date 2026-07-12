import { useCallback, useState } from 'react';

import PieceDisplay from './piece_display';

import styles from './beautiful_body_layout.module.scss';

const CHARACTERS = ['regent', 'doctor', 'damsel', 'jailer'] as const;
const PIECES = ['top', 'mid', 'bottom'] as const;

const pickRandomCharacter = () =>
  CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];

const randomizeSlots = () => PIECES.map(() => pickRandomCharacter());

const BeautifulBodyLayout = () => {
  const [slots, setSlots] = useState<string[]>(randomizeSlots);

  const randomize = useCallback(() => setSlots(randomizeSlots()), []);

  return (
    // Two columns on desktop: the assembled body on the left, controls (and any
    // future copy/metadata) on the right. Collapses to a single column on
    // mobile, mirroring the offering page's row -> stacked pattern.
    <div className={styles.layout}>
      <div className={styles.bodyColumn}>
        <div className={styles.body}>
          {PIECES.map((piece, index) => (
            <PieceDisplay
              className={styles.piece}
              filename={`${slots[index]}-${piece}`}
              key={piece}
            />
          ))}
        </div>
      </div>
      <div className={styles.contentColumn}>
        <button className={styles.randomize} onClick={randomize} type="button">
          randomize
        </button>
        {/* Future content (title, character breakdown, share, etc.) goes here. */}
      </div>
    </div>
  );
};

export default BeautifulBodyLayout;
