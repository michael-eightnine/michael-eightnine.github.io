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
      {/* Right column floats its pieces to fill the height (mirrors the
          offering page): the randomize control up top where the offering's
          prev/next sit, the haiku prose box and save spaced down below. */}
      <div className={styles.contentColumn}>
        <button
          className={styles.randomize}
          onClick={onRandomize}
          type="button"
        >
          [change w/ me]
        </button>
        <div className={styles.readout}>
          {/* Exquisite-corpse haiku: line i comes from the character filling
              slice i (top → 0, mid → 1, bottom → 2). */}
          <p className={styles.haiku}>
            {PIECES.map((piece, index) => (
              <span className={styles.haikuLine} key={piece}>
                {CHARACTERS[slots[index]].haiku[index]}
              </span>
            ))}
          </p>
          <button className={styles.control} onClick={onSave} type="button">
            [save me 4 later]
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeautifulBodyLayout;
