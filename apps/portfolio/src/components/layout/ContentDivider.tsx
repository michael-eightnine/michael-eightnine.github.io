import Asterisk from 'components/svg/Asterisk';

const ContentDivider: React.FC = () => (
  <div
    aria-hidden
    className="h-16 w-full relative flex items-center justify-center gap-6"
  >
    <Asterisk className="w-4 h-4 text-primary" />
    <Asterisk className="w-4 h-4 text-primary" />
    <Asterisk className="w-4 h-4 text-primary" />
  </div>
);

export default ContentDivider;
