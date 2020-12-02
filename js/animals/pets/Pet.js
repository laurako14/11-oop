import { Animal } from "../Animal.js";

class Pet extends Animal {
    constructor(name, color) {
        super(name, color);
        this.legsCount = 4;
        this.speed = 0;
    }

    walk(speedChange) {
        this.speed += speedChange;
        console.log(this.name, '->', this.speed);
    }
}

export { Pet }