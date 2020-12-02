class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    sound() {
        console.log(`${this.name}: ${this.voice}`);
    }

    introduce() {
        console.log(`Labas, as esu ${this.name} ir mano kailio spalva yra ${this.color}.`);
    }
}

export { Animal }