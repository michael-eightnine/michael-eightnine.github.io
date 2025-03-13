import { GenericPopup, GenericPopupProps, PopupContent } from './core';

const ContactPopup = (props: Omit<GenericPopupProps, 'children' | 'title'>) => {
  return (
    <GenericPopup {...props} title="Get in touch">
      <PopupContent>
        Reach out, let's build something great together! 🚀
      </PopupContent>
      <PopupContent>
        <ul>
          <li>
            Contact:{' '}
            <a href="mailto:msmith0892@gmail.com">msmith0892[at]gmail</a>
          </li>
          <li>
            GitHub:{' '}
            <a
              href="https://github.com/michael-eightnine"
              rel="noopener noreferrer"
              target="_blank"
            >
              For written code
            </a>
          </li>
          <li>
            Resume:{' '}
            <a href="#" rel="noopener noreferrer" target="_blank">
              For work history
            </a>
          </li>
          <li>
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/michael-smith-103716139/"
              rel="noopener noreferrer"
              target="_blank"
            >
              For connecting
            </a>
          </li>
        </ul>
      </PopupContent>
    </GenericPopup>
  );
};

export default ContactPopup;
