import { GenericPopup, GenericPopupProps, PopupContent } from './core';

const ContactPopup = (props: Omit<GenericPopupProps, 'children' | 'title'>) => {
  return (
    <GenericPopup {...props} title="Get in touch">
      <PopupContent>Reach out, let's build something together!</PopupContent>
      <PopupContent>
        <ul>
          <li>Contact: [email]</li>
          <li>GitHub: [gh link]</li>
          <li>Resume: [resume link]</li>
          <li>LinkedIn: [linkedin link]</li>
        </ul>
      </PopupContent>
    </GenericPopup>
  );
};

export default ContactPopup;
