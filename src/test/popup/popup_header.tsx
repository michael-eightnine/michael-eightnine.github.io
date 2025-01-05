import styles from './popup.module.scss';

type Props = {
  title: string;
  onClose: () => void;
};

const PopupHeader = ({ title, onClose }: Props) => {
  return (
    <header className={styles.header}>
      {title}

      <button onClick={onClose}>X</button>
    </header>
  );
};

export default PopupHeader;
