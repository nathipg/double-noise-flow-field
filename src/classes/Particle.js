import { Vector } from 'p5';

class Particle {
    constructor(p5) {
        this.position = new Vector(p5.random(p5.width), p5.random(p5.height));
        this.vel = new Vector(1, 0);
        this.acc = new Vector(0, 0);
        this.prevPosition = this.position.copy();
        this.maxSpeed = 4;
        this.p5 = p5;
        this.radius = 1;
    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.position.add(this.vel);
        this.acc.mult(0);
        this.wrapEdges();
    }

    applyForce(force) {
        this.acc.add(force);
    }

    updatePrev() {
        this.prevPosition.x = this.position.x;
        this.prevPosition.y = this.position.y;
    }

    wrapEdges() {
        if (this.position.x > this.p5.width) {
            this.position.x = 0;
            this.prevPosition.x = 0;
        }
        if (this.position.x < 0) {
            this.position.x = this.p5.width;
            this.prevPosition.x = this.p5.width;
        }
        if (this.position.y > this.p5.height) {
            this.position.y = 0;
            this.prevPosition.y = 0;
        }
        if (this.position.y < 0) {
            this.position.y = this.p5.height;
            this.prevPosition.y = this.p5.height;
        }
    }
}

export default Particle;