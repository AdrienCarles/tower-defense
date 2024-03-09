import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import Enemy from './Enemy';

function Board({ levelId, grid, setSelectedCell, selectedCell, selectedTower, setSelectedTower, enemyReachedEnd, enemys }) {
    const [updatedGrid, setUpdatedGrid] = useState(grid);
    // console.log('Board', enemys);
    useEffect(() => {
        if (selectedCell && selectedTower) {
            const newGrid = [...updatedGrid];
            const [y, x] = selectedCell.split('-').map(Number);
            newGrid[y][x] = { type: selectedTower.type, tower: selectedTower };
            setUpdatedGrid(newGrid);
            setSelectedCell(null);
            setSelectedTower(null);
        }
    }, [selectedCell, selectedTower, setSelectedCell, setSelectedTower, updatedGrid])

    useEffect(() => {
        const interval = setInterval(() => {
            detectAndFireAtEnemies();
        }, 1000); // Vérifie les ennemis à portée toutes les 1 secondes

        return () => clearInterval(interval);
    }, [updatedGrid, enemys]); // Assurez-vous que cet effet s'exécute à chaque mise à jour de la grille ou des ennemis

    function detectAndFireAtEnemies() {
        // Logique pour détecter les ennemis et leur tirer dessus
        // Parcourez la grille pour trouver les tourelles
        updatedGrid.forEach((row, rowIndex) => {
          row.forEach((cell, cellIndex) => {
            if (cell.tower) {
              // Pour chaque tourelle, vérifiez chaque ennemi pour voir s'il est à portée
              enemys.forEach((enemy, enemyIndex) => {
                if (isEnemyInRange(cell, enemy)) {
                  fireAtEnemy(cell.tower, enemy);
                  if (enemy.health <= 0) {
                    // Supprimez l'ennemi de la liste si sa santé est 0 ou moins
                    enemys.splice(enemyIndex, 1);
                  }
                }
              });
            }
          });
        });
      }
    
      function isEnemyInRange(tower, enemy) {
        // Calculez la distance entre la tourelle et l'ennemi pour déterminer si l'ennemi est à portée
        // Retournez true si l'ennemi est à portée, false sinon
      }
    
      function fireAtEnemy(tower, enemy) {
        // Réduisez la santé de l'ennemi en fonction des dégâts de la tourelle
        enemy.health -= tower.damage;
      }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', boxSizing: 'border-box', position: 'relative' }}>
            {updatedGrid.map((row, y) => (
                <div key={y} style={{ display: 'flex' }}>
                    {row.map((cellType, x) => {
                        let type;
                        let tower;
                        if (cellType.type) {
                            type = cellType.type;
                            tower = cellType.tower;
                        } else {
                            type = cellType;
                            tower = null;
                        }
                        return (
                            <Cell
                                key={`${y}-${x}`}
                                type={type}
                                tower={tower}
                                selectedTower={selectedTower}
                                isSelected={selectedCell === `${y}-${x}`}
                                onClick={() => {
                                    if (updatedGrid[y][x] === 'empty') {
                                        setSelectedCell(`${y}-${x}`);
                                    }
                                }}
                            >
                                {type === 'Start' && enemys.map((enemy, index) => (
                                    <Enemy key={index} type={enemy} grid={grid} enemyReachedEnd={enemyReachedEnd} />
                                ))}
                            </Cell>
                        );
                    })}
                </div>
            ))
            }
        </div >
    );
}

export default Board;