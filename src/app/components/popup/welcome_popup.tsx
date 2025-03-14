import { GenericPopup, GenericPopupProps, PopupContent } from './core';

const WelcomePopup = (props: Omit<GenericPopupProps, 'children' | 'title'>) => {
  return (
    <GenericPopup {...props} title="Welcome!">
      <PopupContent>
        I'm a Front-End Architect with over 10 years of experience building
        scalable, modern React applications. I've worked with global brands,
        niche companies, and startups, tackling complex codebases and
        transforming them by instilling best practices, applying upgrades, and
        modernizing architectures.
      </PopupContent>
      <PopupContent>
        I believe a highly collaborative, iterative process is essential to
        building great products. I thrive on working closely with engineers,
        designers, product managers, and stakeholders to refine ideas and create
        intuitive, high-performing user experiences.
      </PopupContent>
      <hr />
      <PopupContent>
        Ultimately, my philosophy aligns with what the header of this site says.
        I'm fully invested in delivering the best work possible and helping
        teams, brands, and agencies reach that same standard. Experimental
        design and unique user experiences inspire me, but any project where I
        can dive deep into thoughtful design and development gives me that "good
        day's work" feeling.
      </PopupContent>
    </GenericPopup>
  );
};

export default WelcomePopup;
