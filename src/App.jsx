import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import UMKM from './pages/UMKM.jsx';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/umkm" element={<UMKM />} />
    </Routes>
  );
}

export default App;
