import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Background3D from './components/Background3D';

// Pages
import Home from './pages/Home';
import News from './pages/News';
import Training from './pages/Training';
import Game from './pages/Game';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/training" element={<Training />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
        <Background3D />
        <Navbar />
        <div className="page-wrapper" style={{ position: 'relative', zIndex: 10 }}>
          <AnimatedRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;