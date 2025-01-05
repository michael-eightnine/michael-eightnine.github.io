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

  const onToggleVisibility = async () => {
    if (!sectionRef.current) return;

    const wasClosed = isClosed;

    setTransitionState(() => {
      if (wasClosed) return 'opening';
      return 'closing';
    });

    await toggleSection({
      sectionId: SectionID.Test,
      sectionElement: sectionRef.current
    });

    setTransitionState(() => {
      if (wasClosed) return 'open';
      return 'closed';
    });
  };

  return (
    <section
      onClick={onToggleVisibility}
      className={classnames(styles.section, className, {
        [styles.section__closed]: isClosed,
        [styles.section__closing]: transitionState === 'closing',
        [styles.section__opening]: transitionState === 'opening',
        [styles.section__open]: transitionState === 'open'
      })}
      ref={sectionRef}
    >
      {!isClosed && (
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
