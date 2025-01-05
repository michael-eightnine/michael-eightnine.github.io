import { GenericPopup, GenericPopupProps, PopupContent } from './core';

const SkillsPopup = (props: Omit<GenericPopupProps, 'children' | 'title'>) => {
  return (
    <GenericPopup {...props} title="Technical Focus">
      <PopupContent>
        Yadda yadda yadda ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis
      </PopupContent>
      <PopupContent>
        <ul>
          <li>React / Redux / Router</li>
          <li>GraphQL (or REST if I have to)</li>
          <li>TypeScript & Automated Typing</li>
          <li>Unit & E2E testing</li>
          <li>Figma & Figma Integrations</li>
        </ul>
      </PopupContent>
    </GenericPopup>
  );
};

export default SkillsPopup;
