import { useParams } from 'react-router';

const Offering = () => {
  const { id } = useParams();

  return <div>Viewing id: {id}</div>;
};

export default Offering;
