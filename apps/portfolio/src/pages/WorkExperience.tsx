import PageTransition from 'components/animated/PageTransition';
import WorkSection from 'components/layout/WorkSection';
import RoleEntry from 'components/layout/RoleEntry';
import ContentParagraph from 'components/layout/ContentParagraph';

const WorkExperience: React.FC = () => {
  return (
    <PageTransition className="space-y-6">
      <WorkSection defaultExpanded title="Dscout" yearsActive="2022 - Current">
        <RoleEntry title="Principal Engineer" yearsActive="2024 - Current">
          <ContentParagraph>
            I was promoted to Principal after two years as Lead. I'm now the
            only Front-End Principal at Dscout, which means I float across the
            org as the voice for front-end direction: pitching in on our hardest
            projects, pressure-testing approach with leads and seniors before
            code gets written, catching architectural issues in review, and
            mentoring outside my own feature work.
          </ContentParagraph>
          <ContentParagraph>
            Most of my hands-on time goes to Strata, our design system, and our
            newer AI-native products. Strata is the work that's the most mine: I
            lead it with our design team, defining how the whole system should
            think and behave, and hold the line on accessibility so what we ship
            actually meets WCAG. On the product side, I've built Design Your
            Study, an agentic study builder; AI Moderator, where an AI agent
            interviews participants directly, turning a weeks-long study into
            one that finishes in a day or two; and Explore Your Data, our
            agentic analysis tool.
          </ContentParagraph>
          <ContentParagraph>
            One decision I'm proud of: rather than build these AI products
            inside our original monorepo, I built them outside it, free to run
            on React 19 instead of getting boxed in by the legacy platform's
            React 18 core. To make that work, I architected an event-driven
            bridge that lets these newer apps embed inside the legacy platform.
            It meant we could build net-new work to the standard it deserved
            without churning on old code to get there.
          </ContentParagraph>
        </RoleEntry>
        <RoleEntry title="Lead Front-End Engineer" yearsActive="2022 - 2024">
          <ContentParagraph>
            I joined Dscout to lead front-end development on the Usability
            Testing Suite, our most complex product at the time, and built
            standout features like the Full Session Viewer and Figma heatmapping
            and click-detection integrations.
          </ContentParagraph>
          <ContentParagraph>
            I led our React 18 migration and an equally challenging React Router
            v7 upgrade across a large monorepo, coordinating with engineers on
            other teams, and shipped dozens of features leading small pods of
            two to three engineers alongside product and design.
          </ContentParagraph>
        </RoleEntry>
      </WorkSection>
      <WorkSection title="Agot AI" yearsActive="2021 - 2022">
        <RoleEntry title="Front-End Engineer" yearsActive="2021 - 2022">
          <ContentParagraph>
            At Agot AI, I built SvelteKit tools to visualize, validate, and
            enhance our computer vision products, which tracked fast food prep
            quality and drive-through queue wait times. These dashboards
            improved data accuracy with ingredient-by-ingredient detection,
            bounding box tracking, and KDS-based labeling, letting AI engineers
            quickly report and iterate on model issues.
          </ContentParagraph>
          <ContentParagraph>
            Beyond the dashboards, I focused on rapid prototyping, quickly
            turning around new tools as the team's needs shifted, including
            early-stage consumer product experiments in a fast-moving,
            competitive market.
          </ContentParagraph>
        </RoleEntry>
      </WorkSection>
      <WorkSection title="MERGE" yearsActive="2021">
        <RoleEntry title="Front-End Architect" yearsActive="2021">
          <ContentParagraph>
            I was brought into MERGE to modernize a team that mostly built
            landing pages in jQuery, moving them onto well-typed, maintainable
            React and TypeScript applications. That shift let us take on bigger
            work, including complex eCommerce integrations on Hybris, drawing on
            experience from the Enterprise Car Rentals account at Isobar.
          </ContentParagraph>
          <ContentParagraph>
            My favorite project from that stretch was a fully 3D timeline for
            Liberty Fund, built with React Three Fiber, letting visitors move
            through history and explore pivotal moments in the story of liberty
            and freedom. It's the kind of project that made the modernization
            push worth it.
          </ContentParagraph>
        </RoleEntry>
      </WorkSection>
      <WorkSection title="Isobar" yearsActive="2017 - 2021">
        <RoleEntry title="Front-End Architect" yearsActive="2020 - 2021">
          <ContentParagraph>
            I earned an off-cycle promotion to Architect in October 2020 for
            leading the team through Enterprise's COVID-19 rapid-response work.
            Not long after, I moved on to MERGE.
          </ContentParagraph>
        </RoleEntry>
        <RoleEntry title="Lead Interactive Developer" yearsActive="2019 - 2020">
          <ContentParagraph>
            I was promoted to lead front-end development on Enterprise Car
            Rentals' flagship website and rental experience, working directly
            with client teams and high-level stakeholders.
          </ContentParagraph>
          <ContentParagraph>
            The highlight was leading Enterprise's response to COVID-19,
            shifting almost overnight from a full-touch, white-glove rental
            experience to something completely contactless without losing the
            service level customers expected. That meant rapid prototyping and
            fast revision cycles to ship a single React application across web,
            mobile, and their in-location kiosks, all on an extremely tight
            timeline.
          </ContentParagraph>
        </RoleEntry>
        <RoleEntry title="Senior Developer" yearsActive="2017 - 2019">
          <ContentParagraph>
            I joined Isobar building a data-heavy dashboard for the US Air Force
            to track nuclear assets nationwide, a year-long engagement that was
            more about logic than visuals: complex filtering and faceting,
            virtualization for huge datasets, and plenty of direct client
            interfacing along the way.
          </ContentParagraph>
        </RoleEntry>
      </WorkSection>
    </PageTransition>
  );
};

export default WorkExperience;
