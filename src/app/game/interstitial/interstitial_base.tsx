import styles from './interstitial_base.module.scss';

type Props = {
  title: string;
  contentList: string[];
  actionLabel: string;
  onAction: () => void;
};

const InterstitialBase = ({
  title,
  contentList,
  actionLabel,
  onAction
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        {contentList.map((content, index) => (
          <p className={styles.content} key={index}>
            {content}
          </p>
        ))}
        <button className={styles.action} onClick={onAction}>
          {actionLabel}
        </button>
      </div>
    </div>
  );
};

export default InterstitialBase;
