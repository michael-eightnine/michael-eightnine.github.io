import NavigationBar from 'components/navigation/NavigationBar';
import RouterContent from 'components/animated/RouterContent';
import AppLayout from './components/layout/AppLayout';

const App: React.FC = () => {
  return (
    <AppLayout content={<RouterContent />} navigation={<NavigationBar />} />
  );
};

export default App;
