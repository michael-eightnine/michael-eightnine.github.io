import { useContext } from 'react';
import GenericPopup, { GenericPopupProps } from './generic_popup';
import PopupContent from './popup_content';
import { PopupContext } from './popup_context';

const WelcomePopup = (
  props: Omit<GenericPopupProps, 'children' | 'title' | 'dockButtonRef'>
) => {
  const { welcomeDockButtonRef } = useContext(PopupContext);
  return (
    <GenericPopup
      {...props}
      title="Something 2 Kno"
      dockButtonRef={welcomeDockButtonRef}
    >
      <PopupContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </PopupContent>
      <PopupContent>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
        autem vel eum iure reprehenderit qui in ea voluptate.
      </PopupContent>
    </GenericPopup>
  );
};

export default WelcomePopup;
