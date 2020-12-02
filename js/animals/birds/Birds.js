import { Animal } from "../Animal.js";

class Birds extends Animal {
    constructor(name, color) {
        super(name, color);
        this.wingsCount = 2;
        this.speed = 0;
    }

    fly(speedChange) {
        this.speed += speedChange;
        console.log(this.name, '->', this.speed);
    }
}

export { Birds }