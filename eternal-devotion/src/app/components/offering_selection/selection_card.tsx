import { Link } from 'react-router';

import { createOfferingPath } from 'utils';

import styles from './selection_layout.module.scss';
import { offeringsConfig } from 'content';

type Props = Omit<
  (typeof offeringsConfig)[string],
  'offeringsConfig' | 'filename'
> & { index: number; imageUrl: string };

const SelectionCard = ({
  index,
  title,
  descriptionList,
  id,
  imageUrl,
  callToAction
}: Props) => {
  const cardCharacter = title.charAt(0).toUpperCase();

  return (
    <Link
      className={styles.card}
      style={{
        animationDelay: `${(index + 1) * 0.25}s`
      }}
      to={createOfferingPath(id, '1')}
    >
      <span className={styles.character}>{cardCharacter}</span>
      <div
        className={styles.headingContainer}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <h2 className={styles.title}>{`[${title}]`}</h2>
      </div>
      <div className={styles.description}>
        {descriptionList.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </div>
      <span className={styles.character}>{cardCharacter}</span>
      <div className={styles.cta}>{callToAction}</div>
    </Link>
  );
};

export default SelectionCard;
