import { createContentPathname, offeringsConfig } from 'content';
import type { OfferingsGroup } from 'content';
import { createOfferingPath } from 'utils';

import SelectionCard from './selection_card';
import SelectionCarousel from './selection_carousel';
import styles from './selection_layout.module.scss';

// Where a card links, by offering kind. Paintings open the first offering;
// experiences go to their own route.
const getCardPath = (group: OfferingsGroup) =>
  group.kind === 'experience' ? group.path : createOfferingPath(group.id, '1');

// Card cover image, by offering kind. Both kinds have a root-level cover keyed
// by filename; painting covers are .jpg, the experience cover is .png.
const getCardImageUrl = (group: OfferingsGroup) =>
  group.kind === 'experience'
    ? createContentPathname(`${group.filename}.png`, 'root')
    : createContentPathname(`${group.filename}.jpg`, 'root');

const SelectionLayout = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.heading}>
        a choice <br />
        2 be <br />
        made
        <div className={styles.subheading}>[but nothing's ever final]</div>
      </div>
      <SelectionCarousel>
        {Object.entries(offeringsConfig).map(([groupId, group], index) => (
          <SelectionCard
            callToAction={group.callToAction}
            descriptionList={group.descriptionList}
            imageUrl={getCardImageUrl(group)}
            index={index}
            key={groupId}
            title={group.title}
            to={getCardPath(group)}
          />
        ))}
      </SelectionCarousel>
    </div>
  );
};

export default SelectionLayout;
