import { classnames } from 'utils';

import styles from './section.module.scss';
import { SectionID, usePlacementContext } from '../placement';
import { useRef, useState } from 'react';

type Props = {
  className: string;
  title: string;
};

const Section = ({ children, className, title }: Props & ChildrenProps) => {
  const [transitionState, setTransitionState] = useState<
    'open' | 'closed' | 'closing' | 'opening'
  >('open');
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
  };

  return (
    <section
      onClick={onToggleVisibility}
      className={classnames(styles.section, className, {
        [styles.section__closed]: transitionState === 'closing'
      })}
      ref={sectionRef}
    >
      {transitionState !== 'closing' && (
        <>
          <header className={styles.header}>
            {title}

            <button>X</button>
          </header>
          {children}
        </>
      )}
    </section>
  );
};

export default Section;
