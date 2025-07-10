import { GenericPopup, GenericPopupProps, PopupContent } from './core';

const WelcomePopup = (props: Omit<GenericPopupProps, 'children' | 'title'>) => {
  return (
    <GenericPopup {...props} title="Welcome!">
      <PopupContent>
        I'm a Front-End Architect with over 10 years of experience building
        scalable, modern React applications. I've worked with global brands,
        niche companies, and startups, both architecting new codebases from the
        ground up and transforming complex existing ones by instilling best
        practices, implementing upgrades, and modernizing architectures.
      </PopupContent>
      <PopupContent>
        I believe highly collaborative, iterative processes are essential to
        building great products. I thrive on working closely with engineers,
        designers, product managers, and stakeholders to refine ideas and create
        intuitive, high-performing user experiences.
      </PopupContent>
      <hr />
      <PopupContent>
        My philosophy centers on delivering exceptional work and helping teams,
        brands, and agencies achieve that same standard. While experimental
        design and unique user experiences inspire me, any project where I can
        dive deep into thoughtful design and development is deeply rewarding.
      </PopupContent>
    </GenericPopup>
  );
};

export default WelcomePopup;
