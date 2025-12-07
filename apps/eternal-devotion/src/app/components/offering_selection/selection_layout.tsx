import { createContentPathname, offeringsConfig } from 'content';

import styles from './selection_layout.module.scss';
import SelectionCard from './selection_card';

const SelectionLayout = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.heading}>
        a choice <br />
        2 be <br />
        made
        <div className={styles.subheading}>[but nothing's ever final]</div>
      </div>
      {Object.entries(offeringsConfig).map(([groupId, group], index) => (
        <SelectionCard
          callToAction={group.callToAction}
          descriptionList={group.descriptionList}
          id={groupId}
          imageUrl={createContentPathname(`${group.filename}.jpg`, 'root')}
          index={index}
          key={groupId}
          title={group.title}
        />
      ))}
    </div>
  );
};

export default SelectionLayout;
