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
            <span>Contact:</span>
            <a href="mailto:msmith0892@gmail.com">msmith0892[at]gmail</a>
          </li>

          <li>
            <span>Resume:</span>
            <a
              href="/MichaelSmith_Resume.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              For work history
            </a>
          </li>
          <li>
            <span>GitHub:</span>
            <a
              href="https://github.com/michael-eightnine"
              rel="noopener noreferrer"
              target="_blank"
            >
              For written code
            </a>
          </li>
          <li>
            <span>LinkedIn:</span>
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
