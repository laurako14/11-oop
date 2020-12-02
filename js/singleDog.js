/*
Klases pavadinimas failo pavadinime is didziosios
*/

class singleDog {
    constructor(vardas, spalva, veisle) {
        console.log(vardas, spalva, veisle);
        this.name = vardas;
        this.color = spalva;
        this.breed = veisle;
        this.speed = 0;
        this.isRunning = false;
        this.isSitting = true;
    }

    introduce() {
        console.log(`Labas, as esu ${this.name} (${this.breed}) ir mano kailis yra ${this.color}.`);
    }

    move(speedChange) {
        this.speed +=speedChange;
        console.log(this.name, '->', this.speed);
    }
}

export { singleDog }