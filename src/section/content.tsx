import styles from './section.module.scss';

const Content = ({ children }: ChildrenProps) => {
  return <div className={styles.content}>{children}</div>;
};

export default Content;
