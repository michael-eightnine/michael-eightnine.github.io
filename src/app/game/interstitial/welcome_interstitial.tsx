import InterstitialBase from './interstitial_base';

type Props = {
  onStartGame: () => void;
};

const WelcomeInterstitial = ({ onStartGame }: Props) => {
  return (
    <InterstitialBase
      actionLabel="Wake Anew"
      contentList={[
        'Eyes closed. A sharp pain behind them, or something more. A unique, but common treatment. Whatever happens...you may think it all a mere bad dream...'
      ]}
      mobileAdvisory='Consider "Waking Anew" on a desktop device for the best experience'
      onAction={onStartGame}
      title="You've come to the right place"
    />
  );
};

export default WelcomeInterstitial;
