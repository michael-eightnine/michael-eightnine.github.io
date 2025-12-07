import { useCurrentOffering } from 'content';

import styles from './painting_description.module.scss';

const PaintingDescription = () => {
  const currentOffering = useCurrentOffering();

  return (
    <p className={styles.paintingDescription}>
      {currentOffering
        ? currentOffering.description
        : "I couldn't tell you how you've found yourself here"}
    </p>
  );
};

export default PaintingDescription;
