import { Fish } from "./Fish.js";

class Nemofish extends Fish {
    constructor(name, color) {
        super(name, color);
        this.speed = 1;
    }
}

export { Nemofish }