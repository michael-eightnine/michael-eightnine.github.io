import styles from './popup.module.scss';

const PopupContent = ({ children }: ChildrenProps) => {
  return <div className={styles.content}>{children}</div>;
};

export default PopupContent;
