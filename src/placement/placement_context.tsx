import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react';

import { SectionID } from './types';
import { animateBetweenPortals, getPortals } from './utils';

type UpdateSectionStateInput = {
  sectionId: SectionID;
  sectionElement: HTMLDivElement;
};

type ContextValue = {
  openedSections: SectionID[];
  closedSections: SectionID[];
  toggleSection: (args: UpdateSectionStateInput) => void | Promise<void>;
};

const PlacementContext = createContext<ContextValue>({
  openedSections: [],
  closedSections: [],
  toggleSection: () => {}
});

// eslint-disable-next-line react-refresh/only-export-components
export const usePlacementContext = () => useContext(PlacementContext);

type ProviderProps = {
  dockRef: React.MutableRefObject<HTMLDivElement | null>;
};

const PlacementContextProvider = ({
  children,
  dockRef
}: ProviderProps & ChildrenProps) => {
  const [closedSections, setClosedSections] = useState<
    ContextValue['closedSections']
  >([]);
  const [openedSections, setOpenedSections] = useState<
    ContextValue['openedSections']
  >([SectionID.Test]);

  console.log('dockRef', dockRef);

  const handleCloseSection = useCallback(
    (sectionElement: UpdateSectionStateInput['sectionElement']) => {
      // Early exit if dockRef is not available
      if (!dockRef.current) return;

      // Get the bounding rectangles of both the section and the destination (dock)
      const destinationRect = dockRef.current.getBoundingClientRect();
      const sectionRect = sectionElement.getBoundingClientRect();

      // Calculate scale factors and new dimensions
      const targetWidth = 48;
      const targetHeight = 48;
      const scaleX = targetWidth / sectionRect.width;
      const scaleY = targetHeight / sectionRect.height;
      const newWidth = sectionRect.width * scaleX;
      const newHeight = sectionRect.height * scaleY;

      // Calculate offsets to correctly position the section after scaling
      const offsetX = (newWidth - sectionRect.width) / 2;
      const offsetY = (newHeight - sectionRect.height) / 2;

      // Calculate the relative destination position
      const destinationTop = destinationRect.top - sectionRect.top;
      const destinationLeft = destinationRect.left - sectionRect.left;

      // Apply styles to the section
      sectionElement.style.width = `${sectionRect.width}px`;
      sectionElement.style.height = `${sectionRect.height}px`;

      // Apply the transform with the translation and scaling
      sectionElement.style.transform = `translate(${destinationLeft + offsetX}px, ${destinationTop + offsetY}px) scale(${scaleX}, ${scaleY})`;
    },
    [dockRef]
  );

  const handleOpenSection = useCallback(
    (sectionElement: UpdateSectionStateInput['sectionElement']) => {
      sectionElement.style.transform = 'translate(0,0) scale(1)';
    },
    []
  );

  const toggleSection = useCallback(
    async ({ sectionId, sectionElement }: UpdateSectionStateInput) => {
      const wasClosed = closedSections.includes(sectionId);
      const { main, dock } = getPortals();
      const sourcePortal = wasClosed ? dock : main;
      const destinationPortal = wasClosed ? main : dock;
      await animateBetweenPortals({
        sourcePortal,
        destinationPortal
      });

      const addToState = (prev: SectionID[]) => [...prev, sectionId];
      const removeFromState = (prev: SectionID[]) =>
        prev.filter((id) => id !== sectionId);

      setClosedSections(wasClosed ? removeFromState : addToState);
      setOpenedSections(wasClosed ? addToState : removeFromState);
    },
    [closedSections]
  );

  const contextValue: ContextValue = useMemo(
    () => ({
      toggleSection,
      closedSections,
      openedSections
    }),
    [closedSections, openedSections, toggleSection]
  );

  return (
    <PlacementContext.Provider value={contextValue}>
      {children}
    </PlacementContext.Provider>
  );
};

export default PlacementContextProvider;
