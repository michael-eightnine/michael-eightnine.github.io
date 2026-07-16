import { useParams } from 'react-router';
import offeringsConfig, { DICE_COUNT } from './config';
import type { PaintingsGroup } from './types';
import type { Die } from './types';
import { useCallback } from 'react';

// The painting-flow hooks below only ever run under /offering/:groupId/:id,
// where the group is always a paintings group. This narrows the union to that
// member; it throws if ever handed an experience group (a programming error).
const getPaintingsGroup = (groupId: string): PaintingsGroup => {
  const group = offeringsConfig[groupId];
  if (group?.kind !== 'paintings') {
    throw new Error(`Expected a paintings offering group: ${groupId}`);
  }
  return group;
};

export const useCurrentOffering = () => {
  const { groupId, id } = useParams();

  if (!id || !groupId) return null;

  // Entry guard for the painting route: return null (→ redirect) for an unknown
  // or non-painting group rather than throwing.
  const group = offeringsConfig[groupId];
  if (group?.kind !== 'paintings') return null;

  return group.offeringsConfig[id] ?? null;
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
    getPaintingsGroup(groupId).offeringsConfig
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
    getPaintingsGroup(groupId!).offeringsConfig
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

export const createContentPathname = (
  filename: string,
  type: 'dice' | 'painting' | 'root',
  groupId?: string
): string => {
  const baseUrl = import.meta.env.BASE_URL;
  let subdirectory = '';
  switch (type) {
    case 'dice':
      subdirectory = groupId ? `dice/${groupId}` : 'dice';
      break;
    case 'painting':
      subdirectory = 'optimized_images';
      break;
  }

  if (subdirectory) {
    return `${baseUrl}/${subdirectory}/${filename}`;
  }

  return `${baseUrl}/${filename}`;
};

const generateDiceNumber = () => Math.floor(Math.random() * DICE_COUNT) + 1;

export const rollTheDice = (groupId: string): Die[] => {
  const displayedDiceCount = 3;
  return Array.from({ length: displayedDiceCount }).map(() => {
    const value = generateDiceNumber();
    return {
      src: createContentPathname(`${value}.jpg`, 'dice', groupId),
      value
    };
  });
};

export const getOfferingById = (groupId: string, id: string) => {
  return getPaintingsGroup(groupId).offeringsConfig[id];
};

export const useAdjacentOfferingFilenames = () => {
  const { prevId, nextId, prevEnabled, nextEnabled, groupId } =
    useOfferingNavigationIds();

  const getAdjacentOfferingFilenames = useCallback(() => {
    const filenames: string[] = [];

    if (prevEnabled) {
      const prevOffering =
        getPaintingsGroup(groupId).offeringsConfig[prevId.toString()];
      if (prevOffering) {
        filenames.push(prevOffering.filename);
      }
    }

    if (nextEnabled) {
      const nextOffering =
        getPaintingsGroup(groupId).offeringsConfig[nextId.toString()];
      if (nextOffering) {
        filenames.push(nextOffering.filename);
      }
    }

    return filenames;
  }, [prevEnabled, nextEnabled, groupId, prevId, nextId]);

  return getAdjacentOfferingFilenames;
};
