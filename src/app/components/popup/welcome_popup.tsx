import { GenericPopup, GenericPopupProps, PopupContent } from './core';

const WelcomePopup = (props: Omit<GenericPopupProps, 'children' | 'title'>) => {
  return (
    <GenericPopup {...props} title="Welcome!">
      <PopupContent>
        While titled as a front-end architect, Michael Smith strives to bridge
        the gap between design and development by pairing a decade of front-end
        development experience and of visual design expertise. He's primarily
        focused on React & Svelte development, having concepted and built
        applications, experiences, and sites for global brands like Enterprise
        Rent-A-Car and Nationwide as well as smaller, niche brands like Monit,
        Liberty Fund and Agot AI.
      </PopupContent>
      <PopupContent>
        That's the "professional third person" elevator pitch. On a more casual
        note, I believe in exactly what the header of this site says. I am fully
        invested in delivering the best work possible, and helping to elevate
        teams, brands, and agencies to that same standard. Experimental design
        and experiences really speak to me, but any project where I can dive
        into detailed design and development gives me that good day's work
        feeling.
      </PopupContent>
    </GenericPopup>
  );
};

export default WelcomePopup;
