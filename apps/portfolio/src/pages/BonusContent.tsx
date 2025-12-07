import PageTransition from 'components/animated/PageTransition';
import ContentDivider from 'components/layout/ContentDivider';
import ContentHeader from 'components/layout/ContentHeader';
import ContentParagraph from 'components/layout/ContentParagraph';

const BonusContent: React.FC = () => {
  return (
    <PageTransition>
      <ContentHeader>Bonus Content</ContentHeader>
      <ContentParagraph>
        A big part of my professional drive comes from a desire to create, and I
        often find ways to do that outside of work. These outlets show up in a
        variety of forms, both on and off the web.
      </ContentParagraph>
      <ContentDivider />
      <ContentParagraph>
        <a
          className="standardLink"
          href="/eternal-devotion"
          rel="noopener noreferrer"
          target="_blank"
        >
          Eternal Devotion
        </a>{' '}
        is my portfolio of watercolor paintings and prose. It acts as a
        spiritual successor to my now defunct Hometown Advantage artist persona.
        It receives occasional updates when I can bring myself to fight with my
        scanner.
      </ContentParagraph>
      <ContentDivider />
      <ContentParagraph>
        <a
          className="standardLink"
          href="/dungeon-crawl"
          rel="noopener noreferrer"
          target="_blank"
        >
          Dungeon Crawl
        </a>{' '}
        is a short (but hopefully fun) text based adventure game. A love letter
        to the point and click games I grew up playing, and often find myself
        revisiting from time to time.
      </ContentParagraph>
      <ContentDivider />

      <ContentParagraph>
        <a
          className="standardLink"
          href="/dungeon-crawl"
          rel="noopener noreferrer"
          target="_blank"
        >
          "Popup" Portfolio
        </a>{' '}
        is my previous professional portfolio, built within this repo. While
        visually similar to this site, it experimented with extreme UX patterns
        inspired by early web popup windows and custom animation coordination.
        It was retired in late 2025 in favor of this website.
      </ContentParagraph>
    </PageTransition>
  );
};

export default BonusContent;
