export const createOfferingPath = (groupId: string, offeringId: string) =>
  `/offering/${groupId}/${offeringId}`;

// Experience offerings live under the same /offering namespace but at a static
// segment, so they're indistinguishable from paintings to the end user while
// resolving to their own route ahead of the dynamic :groupId/:id match.
export const createExperiencePath = (id: string) => `/offering/${id}`;

export const getSelectionPath = () => '/selection';
