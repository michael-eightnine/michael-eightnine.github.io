import PageTransition from 'components/animated/PageTransition';
import WorkSection from 'components/layout/WorkSection';
import ContentParagraph from 'components/layout/ContentParagraph';

const WorkExperience: React.FC = () => {
  return (
    <PageTransition className="space-y-6">
      <WorkSection
        defaultExpanded
        title="Principal Engineer / Dscout"
        yearsActive="2022 - Current"
      >
        <ContentParagraph>
          At Dscout, I lead front-end development and architecture for our
          researcher platform, including the Usability Testing Suite. I've built
          standout features like the Full Session Viewer and Figma heatmapping
          and click detection integrations, making the platform both powerful
          and enjoyable for researchers.
        </ContentParagraph>
        <ContentParagraph>
          As the engineering lead for our design system, I handle upgrades,
          audits, and introduce consistent motion and animation principles to
          keep the UI polished and intuitive. I also scaffold and architect
          "bets" projects exploring cutting-edge AI interactions, from
          bi-directional editable canvas UIs to Pipecat-based voice workflows.
        </ContentParagraph>
        <ContentParagraph>
          I collaborate closely with product and design to shape features from
          concept to launch, mentor junior developers, and guide major codebase
          upgrades across React, TypeScript, SCSS modules, Apollo, and GraphQL.
          My focus is on building a platform that's fast, maintainable, and
          ready for the future.
        </ContentParagraph>
      </WorkSection>
      <WorkSection
        title="Front-End Engineer / Agot AI"
        yearsActive="2021 - 2022"
      >
        <ContentParagraph>
          At Agot AI, I built SvelteKit tools to visualize, validate, and
          enhance our computer vision products, which focused on fast food prep
          quality and autonomous drive-through queue wait time detection. These
          dashboards improved data accuracy by enabling granular,
          ingredient-by-ingredient detection, bounding box tracking
          visualization, and complex KDS-based labeling, while also allowing AI
          engineers to quickly report potential computer vision issues. The
          underlying logic was intensive, letting the team debug, analyze, and
          iterate on models with precision.
        </ContentParagraph>
        <ContentParagraph>
          Beyond the dashboards, I focused on rapid prototyping and quickly
          responding to evolving team needs, including early-stage consumer
          product experiments in a fast-moving, competitive market. This
          flexibility helped the team test ideas, adapt workflows, and move from
          concept to results efficiently.
        </ContentParagraph>
      </WorkSection>
      <WorkSection title="Front-End Architect / MERGE" yearsActive="2021">
        <ContentParagraph>
          At MERGE Chicago, I led and evolved the front-end team, helping the
          EEP department deliver cutting-edge web apps and drive repeat client
          engagement. I transformed a team that had mostly built simple landing
          pages into one capable of building modern React and TypeScript
          applications, all while keeping up with the fast-paced demands of
          agency work.
        </ContentParagraph>
        <ContentParagraph>
          Our projects ranged from boundary-pushing experiences using HTML
          canvas and Three.js animations to complex eCommerce solutions on
          Hybris. Throughout, I focused on architecting high-quality,
          maintainable front-end solutions and mentoring the team, ensuring that
          speed never came at the cost of code quality or the end-user
          experience.
        </ContentParagraph>
      </WorkSection>
      <WorkSection
        title="Front-End Architect / Isobar"
        yearsActive="2017 - 2021"
      >
        <ContentParagraph>
          At Isobar, I led front-end development and architecture for clients
          including the US Air Force and Enterprise Car Rentals. I started by
          building bespoke React and Redux applications for the Air Force,
          tackling complex technical and business requirements like huge
          datasets, virtualization, and advanced filtering.
        </ContentParagraph>
        <ContentParagraph>
          I then became lead front-end architect on the Enterprise Car Rentals
          account. One of my biggest achievements was helping the team quickly
          transform their traditionally high-touch rental experience into a
          contactless, app-driven solution during the onset of the COVID-19
          pandemic. This work allowed Enterprise to maintain the quality and
          reliability their customers expect while adapting to new safety
          requirements, all on an extremely tight timeline.
        </ContentParagraph>
        <ContentParagraph>
          Across projects, I architected and managed multiple applications and
          feature releases, collaborating closely with larger teams to
          coordinate milestones and ensure high-quality, maintainable front-end
          solutions.
        </ContentParagraph>
      </WorkSection>
    </PageTransition>
  );
};

export default WorkExperience;
