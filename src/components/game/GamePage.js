import React, { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Board from './Board';
import grid from './Levels';
import wave from './Waves';
import GameMenu from './GameMenu';

function GamePage() {
  let { level } = useParams();
  let levelId = parseInt(level, 10);

  const [selectedTower, setSelectedTower] = useState(null);
  const [selectedCell, setSelectedCell] = useState(null);
  const [enemys, setEnemys] = useState([]);
  const [lives, setLives] = useState(10);
  const [waveIndex, setWaveIndex] = useState(0);
  let currentLevel = grid.find(l => l.id === levelId);
  let currentWave = wave.find(w => w.level === levelId);

  const enemyReachedEnd = useCallback(() => {
    console.log('enemyReachedEnd called');
    setLives(lives => lives - 1);
  }, []);
  

  const handleTowerSelect = useCallback((tower) => {
    setSelectedTower(tower);
  }, []);

  const launchWave = useCallback(() => {
    if (waveIndex >= currentWave.wave.length) return; // Si toutes les vagues ont été lancées, on ne fait rien

    const currentWaveEnemies = currentWave.wave[waveIndex].enemies;
    for (const enemyType in currentWaveEnemies) {
      const enemyCount = currentWaveEnemies[enemyType].count;
      for (let i = 0; i < enemyCount; i++) {
        let delay;
        switch (enemyType) {
          case 'type1':
            delay = 800; // Délai pour le type1
            break;
          case 'type2':
            delay = 250; // Délai pour le type2
            break;
          case 'type3':
            delay = 750; // Délai pour le type2
            break;
          default:
            delay = 500; // Délai par défaut
        }

        setTimeout(() => {
          setEnemys(oldEnemys => [...oldEnemys, enemyType]);
        }, i * delay); // Utilise le délai spécifié en fonction du type
      }
    }

    setWaveIndex(oldWaveIndex => oldWaveIndex + 1); // Passe à la vague suivante
  }, [currentWave, waveIndex]);


  const boardProps = {
    levelId,
    grid: currentLevel.grid,
    setSelectedCell,
    selectedCell,
    selectedTower,
    setSelectedTower,
    enemyReachedEnd,
    enemys
  };
console.log('lives', lives);
  return (
    <>
      <div style={{ padding: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Niveau {level}</h2>
        <div>PdV: {lives >= 10 ? 10 : lives + 1}/10</div>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        boxSizing: 'border-box',
        padding: '20px',
        marginLeft: '2vw', // vw pour un espacement relatif à la largeur de la fenêtre d'affichage
        marginRight: '2vw',
      }}>
        {currentLevel ? <Board {...boardProps} /> : <p>Niveau non trouvé</p>}
      </div>
      <div><GameMenu onTowerSelect={handleTowerSelect} launchWave={launchWave} waveNum={waveIndex} /></div>
    </>
  );
}

export default GamePage;