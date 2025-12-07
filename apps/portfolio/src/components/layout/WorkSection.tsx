import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

type Props = {
  defaultExpanded?: boolean;
  title: string;
  yearsActive: string;
};

const WorkSection: React.FC<Props & ChildrenProps> = ({
  children,
  defaultExpanded = false,
  title,
  yearsActive
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <section>
      <div className="flex items-center justify-between pb-3 border-b-2 border-primary gap-4">
        <button
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Collapse section' : 'Expand section'}
          className="w-8 h-8 flex items-center justify-center font-mono text-xl text-primary hover:bg-primary hover:text-light focus-visible:bg-primary focus-visible:text-light transition-colors cursor-pointer focus:outline-none"
          onClick={() => setIsExpanded((prev) => !prev)}
          type="button"
        >
          {isExpanded ? '−' : '+'}
        </button>
        <div className="flex items-start lg:items-baseline lg:justify-between lg:gap-4 gap-0 grow lg:flex-row flex-col">
          <h1 className="lg:text-2xl sm:text-xl text-lg text-primary font-mono font-bold leading-[1.25]">
            {title}
          </h1>
          <p className="font-mono text-sm text-dark">{yearsActive}</p>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden' }}
            transition={{
              height: {
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1]
              },
              opacity: {
                duration: 0.3,
                ease: 'easeOut'
              }
            }}
          >
            <div className="pt-4 [&>p+p]:mt-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorkSection;
