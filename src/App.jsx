import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import UMKM from './pages/UMKM.jsx';
import UnderConstruction from './pages/UnderConstruction.jsx';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/umkm" element={<UMKM />} />
      <Route path="/*" element={<UnderConstruction />} />
    </Routes>
  );
}

export default App;
