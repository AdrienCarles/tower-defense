import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

function Enemy({ type, grid, enemyReachedEnd }) {
  const [enemy, setEnemy] = useState({});
  const [position, setPosition] = useState(findStartPosition(grid));
  const [lastPosition, setLastPosition] = useState(null);
  const cellSize = window.innerWidth * 0.09; // 9vw
  console.log('enemy', enemy);
  useEffect(() => {
    switch (type) {
      case 'type1':
        setEnemy(() => ({ color: 'green', shape: 'circle', size: 20, speed: 400, health: 5}));
        break;
      case 'type2':
        setEnemy(() => ({ color: 'blue', shape: 'square', size: 15, speed: 100, health: 3 }));
        break;
      case 'type3':
        setEnemy(() => ({ color: 'black', shape: 'square', size: 30, speed: 500, health: 10 }));
        break;
      default:
        setEnemy(() => ({ health: 50, color: 'black', shape: 'circle' }));
    }
    console.log('enemy', enemy);
  }, [type]);

  const move = useCallback((position, grid) => {

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // haut, bas, gauche, droite
    for (let i = 0; i < directions.length; i++) {
      const direction = directions[i];
      // Calcule la nouvelle position
      const newPosition = getNewPosition(position, direction);
      // Si la nouvelle position est valide et différente de la dernière position, on retourne la nouvelle position
      if (isValidPosition(newPosition, grid) && (lastPosition === null || newPosition.i !== lastPosition.i || newPosition.j !== lastPosition.j)) {
        return newPosition;
      }
    }
    // Si aucune direction valide n'a été trouvée, on retourne la position actuelle
    return position;
  }, [lastPosition]);

  useEffect(() => {
    if (!enemy) return; // Vérification que enemy n'est pas null
  
    const interval = setInterval(() => {
      setLastPosition(position);
      setPosition(oldPosition => {
        const newPosition = move(oldPosition, grid);
        if (newPosition && grid[newPosition.i][newPosition.j] === 'End') {
          clearInterval(interval); // Arrête le mouvement de l'ennemi
          setTimeout(() => {
            if (enemy) {
              setEnemy(null);
              setTimeout(enemyReachedEnd, 250); // Appelle la fonction enemyReachedEnd
            }
          }, enemy.speed);
        }
        return newPosition || oldPosition;
      });
    }, enemy.speed); // déplace l'ennemi
  
    return () => clearInterval(interval); // nettoie l'intervalle lors du démontage du composant
}, [grid, position, enemy, move, enemyReachedEnd]);

  function findStartPosition(grid) {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 'Start') {
          return { i, j };
        }
      }
    }
    return { i: 0, j: 0 };
  }

  function isValidPosition(position, grid) {
    const { i, j } = position;
    return i >= 0 && i < grid.length && j >= 0 && j < grid[0].length && (grid[i][j] === 'path' || grid[i][j] === 'End');
  }

  // Cette fonction calcule la nouvelle position en ajoutant la direction à la position actuelle
  function getNewPosition(position, direction) {
    return { i: position.i + direction[0], j: position.j + direction[1] };
  }


  return (
    enemy && (
      <motion.div
        animate={{
          left: `${position.j * cellSize + 7}px`,
          top: `${position.i * cellSize + 7}px`
        }}
        transition={{
          type: 'tween',
          ease: 'linear',
          duration: 0.5, // Durée de l'animation en secondes
        }}
        style={{
          backgroundColor: enemy.color,
          width: enemy.size + 'px',
          height: enemy.size + 'px',
          borderRadius: enemy.shape === 'circle' ? '50%' : '0',
          position: 'absolute',
        }}
      >
        {enemy.type}
      </motion.div>
    )
  );
}

export default Enemy;