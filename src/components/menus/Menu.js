import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Background from './Background';

const Menu = () => {
    const navigate = useNavigate();

    const handlePlay = () => {
        navigate('/levelSelect');
    };
    
    return (
        <Background>
            <Button top={40} onClick={handlePlay}>Play</Button>
        </Background>
    );
};

export default Menu;