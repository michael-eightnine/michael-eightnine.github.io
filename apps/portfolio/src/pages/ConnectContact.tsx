import PageTransition from 'components/animated/PageTransition';
import ContentDivider from 'components/layout/ContentDivider';
import ContentHeader from 'components/layout/ContentHeader';
import ContentParagraph from 'components/layout/ContentParagraph';

const ConnectContact: React.FC = () => {
  return (
    <PageTransition>
      <ContentHeader>Connect & Contact</ContentHeader>
      <ContentParagraph>
        I love building good things, the right way. If you've got a project that
        fits that description, reach out and let's make it happen.
      </ContentParagraph>
      <ContentDivider />
      <ul className="flex justify-between md:flex-row flex-col gap-4">
        <li>
          <a className="standardLink" href="mailto:msmith0892@gmail.com">
            msmith089[at]gmail
          </a>
        </li>
        <li>
          <a
            className="standardLink"
            href="/MichaelSmith_Resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            Resume
          </a>
        </li>
        <li>
          <a
            className="standardLink"
            href="https://github.com/michael-eightnine"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className="standardLink"
            href="https://www.linkedin.com/in/michael-smith-103716139/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </PageTransition>
  );
};

export default ConnectContact;
