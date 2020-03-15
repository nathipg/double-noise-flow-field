import React from 'react';
import { Canvas } from 'p5-react-renderer';

import ParticleSystem from './classes/ParticleSystem';

import './App.css';

const App = () => {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    return (
        <Canvas size={[canvasWidth, canvasHeight]} background={50} noStroke noClear>
            <colorMode args={p5 => [p5.HSB, 255]}>
                <ParticleSystem num={300} />
            </colorMode>
        </Canvas>
    );
}

export default App;
