import PageTransition from 'components/animated/PageTransition';
import ContentDivider from 'components/layout/ContentDivider';
import ContentHeader from 'components/layout/ContentHeader';
import ContentParagraph from 'components/layout/ContentParagraph';

const ProfessionalFocus: React.FC = () => {
  return (
    <PageTransition>
      <ContentHeader>Professional Focus</ContentHeader>
      <ContentParagraph>
        I'm Michael Smith, a Principal Front-End Engineer and visual artist
        based in Chicago. I'm currently the sole Front-End Principal at Dscout,
        where I set front-end architecture, lead our design system, and build
        user-facing applications. With over 10 years of experience across
        agencies, AI startups, and SaaS companies, I've learned how to move fast
        without cutting corners I'd regret later.
      </ContentParagraph>
      <ContentParagraph>
        I started my career in interaction design, and that perspective shapes
        everything I build: clarity, structure, and how a feature actually feels
        to use. Over the years, I've rebuilt complex React codebases and design
        systems, and at Dscout I've been building AI-native products: Design
        Your Study, an agentic study builder, and AI Moderator, where an AI
        agent interviews participants directly, turning a weeks-long study into
        one that finishes in a day or two. I've also worked on Explore Your
        Data, our agentic analysis tool.
      </ContentParagraph>
      <ContentParagraph>
        As Principal, I'm not tied to one team. My job is to know what's
        happening across the front end and help keep it heading in a consistent
        direction, whether that's stepping into a hard project, talking through
        an approach with a lead before they start building, or mentoring folks
        outside my own work. That same instinct is what drives Strata, our
        design system, which is where most of that comes together and the
        project I'd point to as most fully my own.
      </ContentParagraph>
      <ContentParagraph>
        I've stayed at Dscout longer than anywhere else, and not by accident. I
        like owning decisions long enough to see whether they were right, and
        being part of the product conversation from the start rather than just
        building what's handed to me. That's a different kind of work than
        agency life, where you ship something and move on before you find out
        how it holds up.
      </ContentParagraph>
      <ContentDivider />
      <ContentParagraph className="text-center">
        Thanks for visiting my home on the world wide web.
      </ContentParagraph>
    </PageTransition>
  );
};

export default ProfessionalFocus;
