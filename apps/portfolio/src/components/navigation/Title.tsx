import Globe from 'components/svg/Globe';

const Title: React.FC = () => {
  return (
    <div className="flex gap-8 items-center">
      <Globe className="h-18 w-18" />
      <h1 className="font-mono text-2xl w-[8ch] leading-8">
        building good things well
      </h1>
    </div>
  );
};

export default Title;
