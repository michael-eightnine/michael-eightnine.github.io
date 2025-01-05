import { classnames } from 'utils';

import styles from './section.module.scss';
import { SectionID, usePlacementContext } from '../placement';
import { useRef, useState } from 'react';

type Props = {
  className: string;
  title: string;
  defaultTransitionState?: 'open' | 'closed' | 'closing' | 'opening'
};

const Section = ({ children, className, title, defaultTransitionState = 'open' }: Props & ChildrenProps) => {
  const [transitionState, setTransitionState] = useState<
    'open' | 'closed' | 'closing' | 'opening'
  >(defaultTransitionState);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { toggleSection, closedSections } = usePlacementContext();

  const isClosed = closedSections.includes(SectionID.Test);

  const onToggleVisibility = () => {
    if (!sectionRef.current) return;

    setTransitionState(() => {
      if (isClosed) return 'opening';
      return 'closing';
    });

    toggleSection({
      sectionId: SectionID.Test,
      sectionElement: sectionRef.current
    });

    setTimeout(() => {
      setTransitionState((prev) => (prev === 'opening' ? 'open' : 'closed'));
    }, 750);
  };

  return !isClosed && (
    <section
      onClick={onToggleVisibility}
      className={classnames(styles.section, className, {
        [styles.section__closed]: transitionState === 'closed',
        [styles.section__closing]:
          transitionState === 'closing',
        [styles.section__opening]: transitionState === 'opening',
        [styles.section__open]: transitionState === 'open'
      })}
      ref={sectionRef}
    >
      {transitionState !== 'closed' && (
        <>
          <header className={styles.header}>
            {title}

            <button>X</button>
          </header>
          {children}
        </>
      )}
      {transitionState === 'closed' && (
        <div className={styles.sectionButton}>+</div>
      )}
    </section>
  );
};

export default Section;
