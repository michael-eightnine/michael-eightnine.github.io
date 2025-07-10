import { useParams } from 'react-router';
import offeringsConfig, { DICE_COUNT } from './config';
import type { Die } from './types';
import { useCallback } from 'react';

export const useCurrentOffering = () => {
  const { groupId, id } = useParams();

  if (!id || !groupId) return null;

  return offeringsConfig[groupId].offeringsConfig[id];
};

export const useOfferingNavigationIds = () => {
  const { id, groupId } = useParams();

  if (!id || !groupId) {
    return {
      prevId: Infinity,
      prevEnabled: false,
      nextId: 2,
      nextEnabled: true,
      groupId: '1'
    };
  }

  const offeringsCount = Object.keys(
    offeringsConfig[groupId].offeringsConfig
  ).length;

  const idAsNumber = Number(id);
  const atEnd = idAsNumber === offeringsCount;
  const atStart = idAsNumber === 1;
  const nextId = idAsNumber + 1;
  const prevId = idAsNumber - 1;

  return {
    prevId,
    prevEnabled: !atStart,
    nextId,
    nextEnabled: !atEnd,
    groupId: groupId!
  };
};

export const useCurrentOfferingPosition = () => {
  const { id, groupId } = useParams();
  const offeringsCount = Object.keys(
    offeringsConfig[groupId!].offeringsConfig
  ).length;

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

export const getOfferingById = (groupId: string, id: string) => {
  return offeringsConfig[groupId].offeringsConfig[id];
};

export const useAdjacentOfferingFilenames = () => {
  const { prevId, nextId, prevEnabled, nextEnabled, groupId } =
    useOfferingNavigationIds();

  const getAdjacentOfferingFilenames = useCallback(() => {
    const filenames: string[] = [];

    if (prevEnabled) {
      const prevOffering =
        offeringsConfig[groupId].offeringsConfig[prevId.toString()];
      if (prevOffering) {
        filenames.push(prevOffering.filename);
      }
    }

    if (nextEnabled) {
      const nextOffering =
        offeringsConfig[groupId].offeringsConfig[nextId.toString()];
      if (nextOffering) {
        filenames.push(nextOffering.filename);
      }
    }

    return filenames;
  }, [prevEnabled, nextEnabled, groupId, prevId, nextId]);

  return getAdjacentOfferingFilenames;
};
