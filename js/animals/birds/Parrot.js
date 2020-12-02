import { Birds } from "./Birds.js";

class Parrot extends Birds {
    constructor(name, color) {
        super(name, color);
        this.speed = 15;
    }

    repeatSound(sound) {
        console.log(`Tu sakai: ${sound}, papuga atsako: ${sound}.`);
    }
}

export { Parrot }