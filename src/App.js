import React from 'react';
import Menu from './components/menus/Menu';
import LevelSelect from './components/menus/LevelSelect';
import GamePage from './components/game/GamePage';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/game/:level" element={<GamePage />} />
        <Route path="/levelSelect" element={<LevelSelect />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/" element={<Navigate to="/menu" />} />
      </Routes>
    </Router>
  );
}

export default App;
