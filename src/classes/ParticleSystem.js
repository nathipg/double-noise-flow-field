import React, {useRef, useEffect} from 'react';
import {useP5, useDraw} from 'p5-react-renderer';
import Particle from './Particle';
import FlowField from './FlowField';

const ParticleSystem = props => {
    const scale = 10;
    const p5 = useP5();
    const particles = useRef(null);
    const flowfield = useRef(null);

    useEffect(() => {
        particles.current = new Array(props.num).fill(null).map(() => new Particle(p5));

        flowfield.current = new FlowField(
            scale,
            p5.floor(p5.width / scale),
            p5.floor(p5.height / scale),
        );
    }, [p5, props.num]);

    useDraw(() => {
        flowfield.current.generateField(p5);
        particles.current.forEach(p => {
            flowfield.current.applyForceToParticle(p);
            p.update(flowfield.current);
        });
    });

    let particleEls = null;
    if (particles.current) {
        particleEls = particles.current.map((p, i) => {
            const args = [p.position.x, p.position.y, p.prevPosition.x, p.prevPosition.y];
            p.updatePrev();
            return <line stroke={[220, 20, 60, 100]} key={i} args={args} />;
        });
    }

    return particleEls;
}

export default ParticleSystem;