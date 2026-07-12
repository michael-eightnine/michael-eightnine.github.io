import { Link } from 'react-router';

import styles from './selection_layout.module.scss';

// Card-facing fields, shared by every offering kind. The link target (`to`) is
// supplied by the parent so paintings and experiences can route differently
// while the card renders identically.
type Props = {
  index: number;
  title: string;
  descriptionList: string[];
  imageUrl: string;
  callToAction: string;
  to: string;
};

const SelectionCard = ({
  index,
  title,
  descriptionList,
  imageUrl,
  callToAction,
  to
}: Props) => {
  const cardCharacter = title.charAt(0).toUpperCase();

  return (
    <Link
      className={styles.card}
      data-card
      style={{
        animationDelay: `${(index + 1) * 0.25}s`
      }}
      to={to}
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
