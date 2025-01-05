import styles from './app.module.scss';
import { Content, Section } from './section';

function TestSection({
  defaultTransitionState
}: {
  defaultTransitionState: any;
}) {
  return (
    <Section
      className={styles.section}
      defaultTransitionState={defaultTransitionState}
      title="Something 2 know"
    >
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </Content>
      <Content>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
        autem vel eum iure reprehenderit qui in ea voluptate.
      </Content>
    </Section>
  );
}

export default TestSection;
