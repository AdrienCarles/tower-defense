import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import Enemy from './Enemy';

function Board({ levelId, grid, setSelectedCell, selectedCell, selectedTower, setSelectedTower, enemyReachedEnd, enemys, setEnemys }) {
    const [updatedGrid, setUpdatedGrid] = useState(grid);
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
                                    <Enemy key={index} type={enemy} grid={grid} enemyReachedEnd={enemyReachedEnd}/>
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