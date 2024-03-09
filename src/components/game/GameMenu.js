import React from 'react';
import Towers from './Towers';


function GameMenu({ onTowerSelect, launchWave, waveNum }) {
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            boxSizing: 'border-box',
            padding: '20px',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                boxSizing: 'border-box',
                border: '0.5px solid #999',
            }}>
                <h4 style={{ textAlign: 'center', margin: '10px' }}>Tours</h4>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {Towers.map((tower, index) => (
                        <button
                            key={index}
                            onClick={() => onTowerSelect(tower)}
                            style={{
                                margin: '5px',
                                padding: '10px', 
                                backgroundColor: tower.color, 
                            }}
                        >
                            {tower.name}
                        </button>
                    ))}
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                boxSizing: 'border-box',
                border: '0.5px solid #999',
            }}>
                <h4 style={{ textAlign: 'center', margin: '10px' }}>Autres</h4>
                <button
                    onClick={launchWave}
                    style={{
                        margin: '8px', 
                        padding: '5px', 
                    }}
                >
                    Lancer la vague
                </button>
                <div>Vague {waveNum}/3</div>
            </div>
        </div>
    );
}

export default GameMenu;