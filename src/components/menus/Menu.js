import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Background from './Background';

const Menu = () => {
    const navigate = useNavigate();
    console.log(process.env.PUBLIC_URL + '/assets/background.jpg');

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