import { Birds } from "./Birds.js";

class Sparrow extends Birds {
    constructor(name, color) {
        super(name, color);
        this.speed = 10;
    }
}

export { Sparrow }