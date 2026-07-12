import { CHARACTERS, PIECES } from 'content';

import PieceDisplay from './piece_display';

import styles from './beautiful_body_layout.module.scss';

type Props = {
  // Character index per slice, top to bottom.
  slots: number[];
  onRandomize: () => void;
};

const BeautifulBodyLayout = ({ slots, onRandomize }: Props) => {
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
              filename={`${CHARACTERS[slots[index]].name}-${piece}`}
              key={piece}
            />
          ))}
        </div>
      </div>
      <div className={styles.contentColumn}>
        {/* Exquisite-corpse haiku: line i comes from the character filling
            slice i (top → 0, mid → 1, bottom → 2). */}
        <p className={styles.haiku}>
          {PIECES.map((piece, index) => (
            <span className={styles.haikuLine} key={piece}>
              {CHARACTERS[slots[index]].haiku[index]}
            </span>
          ))}
        </p>
        <button
          className={styles.randomize}
          onClick={onRandomize}
          type="button"
        >
          randomize
        </button>
      </div>
    </div>
  );
};

export default BeautifulBodyLayout;
