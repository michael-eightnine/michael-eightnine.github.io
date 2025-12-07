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
        based in Chicago. I currently work at Dscout, where I lead front-end
        architecture, our design system, user-facing applications, and
        cutting-edge "bets" projects. With over 10 years of experience at
        agencies, AI startups, and SaaS companies, I've learned how to balance
        speed, practicality, and long-term thinking.
      </ContentParagraph>
      <ContentParagraph>
        I started my career in interaction design, and that perspective shapes
        everything I build. I care about clarity, structure, and how a feature
        actually feels to use. Over the years, I've rebuilt complex React
        codebases, created design systems, and delivered full features with
        TypeScript, GraphQL, and Apollo. More recently, I've been exploring
        AI-assisted development workflows and building applications that
        leverage agentic logic, including traces and autonomous workflows, to
        create smarter, more adaptive user experiences. I can dive in myself or
        guide a team through challenging projects.
      </ContentParagraph>
      <ContentParagraph>
        At Dscout, I get involved early with product and design. I help shape
        features, plan workflows, and figure out the best vision for a feature
        or product. Engineering isn't just about implementing ideas. Everyone on
        the team contributes to deciding what the product should be.
      </ContentParagraph>
      <ContentParagraph>
        I enjoy the mix of architecture, hands-on development, and collaboration
        that comes with a principal role. My focus is on building solid
        front-end foundations, creating clear and usable experiences, and
        helping teams ship work they can be proud of.
      </ContentParagraph>
      <ContentDivider />
      <ContentParagraph className="text-center">
        Thanks for visiting my home on the world wide web.
      </ContentParagraph>
    </PageTransition>
  );
};

export default ProfessionalFocus;
