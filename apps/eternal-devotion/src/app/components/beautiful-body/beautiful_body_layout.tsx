import { CHARACTERS, PIECES } from 'content';

import PieceDisplay from './piece_display';
import { sliceFilenames } from './config';

import styles from './beautiful_body_layout.module.scss';

type Props = {
  // Character index per slice, top to bottom.
  slots: number[];
  onRandomize: () => void;
  onSave: () => void;
};

const BeautifulBodyLayout = ({ slots, onRandomize, onSave }: Props) => {
  const filenames = sliceFilenames(slots);

  return (
    // Two columns on desktop: the assembled body on the left, controls (and any
    // future copy/metadata) on the right. Collapses to a single column on
    // mobile, mirroring the offering page's row -> stacked pattern.
    <div className={styles.layout}>
      <div className={styles.bodyColumn}>
        <div className={styles.body}>
          {filenames.map((filename) => (
            <PieceDisplay
              className={styles.piece}
              filename={filename}
              key={filename}
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
        <div className={styles.controls}>
          <button
            className={styles.control}
            onClick={onRandomize}
            type="button"
          >
            randomize
          </button>
          <button className={styles.control} onClick={onSave} type="button">
            save me 4 later
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeautifulBodyLayout;
