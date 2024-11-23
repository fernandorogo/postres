
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './view/Home'
import Site from './view/Site'
import Nosotros from './view/Nosotros'
import Mision from './view/Mision'
import Vision from './view/Vision'

function App() {
  return (
    <div className="App">
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="site" element={<Site />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="mision" element={<Mision />} />
        <Route path="vision" element={<Vision />} />

      </Routes>
      
    </div>
  );
}

export default App;
