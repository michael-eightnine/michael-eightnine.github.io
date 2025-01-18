import InterstitialBase from './interstitial_base';

type Props = {
  onEndGame: () => void;
};

const ExitInterstitial = ({ onEndGame }: Props) => {
  return (
    <InterstitialBase
      actionLabel="Complete this chapter"
      contentList={[
        'All there is to be done has been done. No worse for wear, one can hope.',
        'Thanks for playing. I made this game over a few days out of admiration for the click and point games I grew up with, and my continued love for Fallout and Soulsborne games.'
      ]}
      onAction={onEndGame}
      title="Childhood's End"
    />
  );
};

export default ExitInterstitial;
