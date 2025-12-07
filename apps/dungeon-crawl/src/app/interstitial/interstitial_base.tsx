import styles from './interstitial_base.module.scss';

type Props = {
  actionLabel: string;
  contentList: string[];
  mobileAdvisory?: string;
  onAction: () => void;
  title: string;
};

const InterstitialBase = ({
  actionLabel,
  contentList,
  mobileAdvisory,
  onAction,
  title
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
        {!!mobileAdvisory && (
          <p className={styles.mobileAdvisory}>{mobileAdvisory}</p>
        )}
      </div>
    </div>
  );
};

export default InterstitialBase;
