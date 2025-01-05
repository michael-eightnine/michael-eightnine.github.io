import Nav from './nav';
import styles from './app.module.scss';
import { Content, Section } from './section';
import {
  PlacementContextProvider,
  SectionID,
  usePlacementContext
} from './placement';
import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { animateBetweenPortals, getPortals } from './placement/utils';

function Sections() {
  const { closedSections } = usePlacementContext();
  const { main, dock } = getPortals();

  if (!dock || !main) return null;

  const component = (
    <Section title="Something 2 know">
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Content>
    </Section>
  );

  console.log(closedSections.includes(SectionID.Test))

  if (!closedSections.includes(SectionID.Test)) {
    return createPortal(
      component,
      main
    );
  }

  return createPortal(
    component,
    dock
  );
}

export default Sections;
