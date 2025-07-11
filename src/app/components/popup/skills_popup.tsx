import { GenericPopup, GenericPopupProps, PopupContent } from './core';

const SkillsPopup = (props: Omit<GenericPopupProps, 'children' | 'title'>) => {
  return (
    <GenericPopup {...props} title="Technical Focus">
      <PopupContent>
        My work centers around React development and architecture, from SPAs
        with React Router to SSR apps with Next.js. I enjoy working with GraphQL
        for its strong type generation and have extensive experience with
        styling approaches from modular SCSS to utility-first frameworks like
        Tailwind CSS.
      </PopupContent>
      <PopupContent>
        I'm experienced with design systems, both in Figma and implementation,
        and focus on creating scalable, maintainable architectures. While I've
        spent years with Webpack, I lean towards the speed and simplicity Vite
        brings to the ecosystem when setting up new projects.
      </PopupContent>
      <hr />
      <PopupContent>
        <h4>[ As a list ]</h4>
        <ul>
          <li>React (Redux, Next.js, React Router)</li>
          <li>GraphQL & REST APIs</li>
          <li>TypeScript & automated typing</li>
          <li>Testing (RTL, Jest, Playwright)</li>
          <li>Styling (SCSS, Tailwind CSS, DaisyUI)</li>
          <li>Build tools (Webpack, Vite) & developer tooling</li>
          <li>Figma & design system integration</li>
          <li>Scalable state management</li>
          <li>Agile workflows (JIRA, best practices)</li>
          <li>Developer mentorship & skill growth</li>
        </ul>
      </PopupContent>
    </GenericPopup>
  );
};

export default SkillsPopup;
