import { Pet } from "./Pet.js";

class Dog extends Pet {
    constructor(name, color) {
        super(name, color);
        this.likePlaying = true;
        this.voice = 'Au au!';
    }
}

export { Dog }