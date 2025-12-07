import NavigationBar from 'components/navigation/NavigationBar';
import RouterContent from 'components/animated/RouterContent';
import Layout from './components/layout/Layout';

function App() {
  return <Layout content={<RouterContent />} navigation={<NavigationBar />} />;
}

export default App;
