import { useParams } from 'react-router';
import offeringsConfig, { DICE_COUNT } from './config';
import type { Die } from './types';

export const useCurrentOffering = () => {
  const { id } = useParams();

  if (!id) return null;

  return offeringsConfig[id];
};

export const useOfferingNavigationIds = () => {
  const { id } = useParams();

  const offeringsCount = Object.keys(offeringsConfig).length;

  if (!id) {
    return {
      prevId: offeringsCount,
      prevEnabled: false,
      nextId: 2,
      nextEnabled: true
    };
  }

  const idAsNumber = Number(id);
  const atEnd = idAsNumber === offeringsCount;
  const atStart = idAsNumber === 1;
  const nextId = idAsNumber + 1;
  const prevId = idAsNumber - 1;

  return {
    prevId,
    prevEnabled: !atStart,
    nextId,
    nextEnabled: !atEnd
  };
};

export const useCurrentOfferingPosition = () => {
  const { id } = useParams();
  const offeringsCount = Object.keys(offeringsConfig).length;

  if (!id) {
    return {
      current: 1,
      total: offeringsCount
    };
  }

  return {
    current: Number(id),
    total: offeringsCount
  };
};

export const createContentPathname = (filename: string, isDice = false) => {
  const baseUrl = import.meta.env.BASE_URL;
  const subdirectory = isDice ? 'dice' : 'optimized_images';

  return `${baseUrl}/${subdirectory}/${filename}`;
};

const generateDiceNumber = () => Math.floor(Math.random() * DICE_COUNT) + 1;

export const rollTheDice = (): Die[] => {
  const displayedDiceCount = 3;
  return Array.from({ length: displayedDiceCount }).map(() => {
    const value = generateDiceNumber();
    return {
      src: createContentPathname(`${value}.jpg`, true),
      value
    };
  });
};
