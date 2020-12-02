import { Fish } from "./Fish.js";

class Goldfish extends Fish {
    constructor(name, color) {
        super(name, color);
        this.speed = 0.2;
    }
}

export { Goldfish }