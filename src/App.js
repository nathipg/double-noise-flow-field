import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');

        ctx.clearRect(0, 0, window.innerWidth,window.innerHeight);
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillRect(0,0,window.innerWidth,window.innerHeight);

        ctx.font = 'bolder 20px sans-serif';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText('#100Days100Projects', 150, 75);
    });

    return (
        <div className="App">
            <canvas ref={canvasRef} className="canvas" />
        </div>
    );
}

export default App;
