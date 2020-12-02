import { Birds } from "./Birds.js";

class Chicken extends Birds {
    constructor(name, color) {
        super(name, color);
        this.speed = 0.5;
    }
}

export { Chicken }