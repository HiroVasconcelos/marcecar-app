import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';

import Home from './components/pages/Home'
import Servicos from './components/pages/Servicos'
import NossosTrabalhos from './components/pages/NossosTrabalhos'
import QuemSomos from './components/pages/QuemSomos'
import Contatos from './components/pages/Contatos'

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/nossos-trabalhos" element={<NossosTrabalhos />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/contatos" element={<Contatos />} />
        </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
