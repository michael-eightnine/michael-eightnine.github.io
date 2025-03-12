import { GenericPopup, GenericPopupProps, PopupContent } from './core';

const WelcomePopup = (props: Omit<GenericPopupProps, 'children' | 'title'>) => {
  return (
    <GenericPopup {...props} title="Welcome to the website!">
      <PopupContent>
        I'm a Front-End Architect with over 10 years of experience crafting
        scalable, modern web applications. I’ve worked with global brands, niche
        companies, and startups, tackling complex codebases and transforming
        them by instilling best practices, applying upgrades, and modernizing
        their architectures.
      </PopupContent>
      <PopupContent>
        Collaboration is at the heart of my work. I thrive on working with other
        engineers, designers, product managers, and stakeholders to turn ideas
        into intuitive, high-performing user experiences.
      </PopupContent>
      <hr />
      <PopupContent>
        Overall I believe exactly what the header of this site says. I'm fully
        invested in delivering the best work possible, and helping to elevate
        teams, brands, and agencies to that same standard. Experimental design
        and experiences really speak to me, but any project where I can dive
        into detailed design and development gives me that "good day's work"
        feeling.
      </PopupContent>
    </GenericPopup>
  );
};

export default WelcomePopup;
