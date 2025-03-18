import { Routes, Route } from 'react-router';
import { Home, Offering } from 'routes';

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Offering />} path="/offering/:id" />
    </Routes>
  );
}

export default App;
