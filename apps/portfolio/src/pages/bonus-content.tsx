import PageTransition from 'components/animated/PageTransition';

const BonusContent: React.FC = () => {
  return (
    <PageTransition>
      <h1 className="text-3xl font-bold mb-4">Bonus Content</h1>
      <p className="text-gray-700">
        Content for bonus content section goes here.
      </p>
    </PageTransition>
  );
};

export default BonusContent;
