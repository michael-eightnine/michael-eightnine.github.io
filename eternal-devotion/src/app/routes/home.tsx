import { useNavigate } from 'react-router';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      Welcome{' '}
      <button onClick={() => navigate('/offering/1')}>Go forward</button>
    </div>
  );
}

export default Home;
