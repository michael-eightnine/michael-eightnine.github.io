import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import NavLink from 'components/nav/nav_link';
import { classnames, createOfferingPath } from 'utils';
import { rollTheDice, useOfferingNavigationIds, type Die } from 'content';

import PaintingDescription from './painting_description';
import styles from './painting_nav.module.scss';

const PaintingDie = ({ die }: { die: Die }) => (
  <img
    alt={`Your rolled ${die.value}`}
    className={styles.paintingDie}
    src={die.src}
    title={`Your rolled ${die.value}`}
  />
);

const PaintingNav = () => {
  const [dice, setDice] = useState<Die[] | null>(null);
  const { id } = useParams();
  const { prevId, prevEnabled, nextId, nextEnabled } =
    useOfferingNavigationIds();

  useEffect(() => {
    setDice(rollTheDice());
  }, [id]);

  const diceMatchCount = useMemo(() => {
    if (!dice) return 0;

    const rolledValues = dice.map(({ value }) => value);
    const matchCount = Math.max(
      ...Object.values(
        rolledValues.reduce((acc: Record<number, number>, item) => {
          acc[item] = (acc[item] || 0) + 1;
          return acc;
        }, {})
      )
    );

    return matchCount;
  }, [dice]);

  return (
    <div className={styles.paintingNav}>
      <span
        className={classnames(styles.diceCount, {
          [styles.diceCount__large]: diceMatchCount === 2,
          [styles.diceCount__huge]: diceMatchCount === 3
        })}
      >{`${diceMatchCount} out of 3`}</span>
      {dice && <PaintingDie die={dice[0]} />}
      {dice && <PaintingDie die={dice[1]} />}
      <div className={styles.paintingNavGroup}>
        <NavLink
          enabled={prevEnabled}
          label="prev"
          path={createOfferingPath(prevId.toString())}
        />
        {dice && <PaintingDie die={dice[2]} />}
        <NavLink
          enabled={nextEnabled}
          label="next"
          path={createOfferingPath(nextId.toString())}
        />
      </div>
      <PaintingDescription />
    </div>
  );
};

export default PaintingNav;
