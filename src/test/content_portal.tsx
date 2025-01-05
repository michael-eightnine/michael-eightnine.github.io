import { MutableRefObject } from 'react';
import { createPortal } from 'react-dom';

const ContentPortal = ({
  portalRef,
  children
}: ChildrenProps & { portalRef: MutableRefObject<HTMLDivElement | null> }) => {
  if (!portalRef.current) return null;

  return createPortal(children, portalRef.current);
};

export default ContentPortal;
