import { Pet } from "./Pet.js";

class Rabbit extends Pet {
    constructor(name, color) {
        super(name, color);
        this.likePlaying = false;
        this.voice = '';
    }
}

export { Rabbit }