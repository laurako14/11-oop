import { Fish } from "./Fish.js";

class Salmon extends Fish {
    constructor(name, color) {
        super(name, color);
        this.speed = 2;
    }
}

export { Salmon }