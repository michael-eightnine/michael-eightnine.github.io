import { createContentPathname, offeringsConfig } from 'content';

import styles from './selection_layout.module.scss';
import SelectionCard from './selection_card';

const SelectionLayout = () => {
  return (
    <div className={styles.grid}>
      {Object.entries(offeringsConfig).map(([groupId, group], index) => (
        <SelectionCard
          callToAction={group.callToAction}
          descriptionList={group.descriptionList}
          id={groupId}
          imageUrl={`${createContentPathname(group.filename, 'root')}.jpg`}
          index={index}
          key={groupId}
          title={group.title}
        />
      ))}
    </div>
  );
};

export default SelectionLayout;
