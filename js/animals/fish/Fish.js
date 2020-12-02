import { Animal } from "../Animal.js";

class Fish extends Animal {
    constructor(name, color) {
        super(name, color);
        this.fin = 5;
        this.speed = 0;
    }

    swim(speedChange) {
        this.speed += speedChange;
        console.log(this.name, '->', this.speed);
    }
}

export { Fish }