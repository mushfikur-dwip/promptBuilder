import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';   
import SceneApp from './pages/App'; 

function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<SceneApp />} />
      </Routes>
    </Router>
  );
}

export default MainApp;
