import React, { useState } from 'react';
import Background from '../menus/Background';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import niv1Image from '../../assets/niv1.png';
import niv2Image from '../../assets/niv2.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from '../menus/Button';

const LevelSelect = () => {
    const navigate = useNavigate();
    const [selectedLevel, setSelectedLevel] = useState(0);

    const handleReturn = () => {
        navigate('/menu');
    };

    const handlePlay = () => {
        navigate(`/game/${selectedLevel + 1}`); // navigate to /game/1, /game/2
    };

    const images = [
        { src: `${niv1Image}`, title: 'Niveau 1' },
        { src: `${niv2Image}`, title: 'Niveau 2' },
    ];

    return (
        <Background>
            <Carousel showThumbs={false} showStatus={false} onChange={setSelectedLevel}>
                {images.map((image, index) => (
                    <div key={index} style={{
                        position: 'relative',
                        height: '40vh',
                        width: '75vw',
                        margin: 'auto',
                        marginBottom: '5vh',
                    }}>
                        <div style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundImage: `url(${image.src})`
                        }} />
                        <h2 style={{
                            position: 'absolute',
                            width: '50%',
                            bottom: '10%',
                            left: 0,
                            right: 0,
                            margin: 'auto',
                            textAlign: 'center',
                            color: '#fff',
                            textShadow: '2px 2px 4px #000',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}>{image.title}</h2>
                    </div>
                ))}
            </Carousel>
            <Button top={75} onClick={handlePlay}>Play !</Button>
            <Button top={85} onClick={handleReturn}>Return</Button>
        </Background>
    );
}

export default LevelSelect;