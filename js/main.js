import { singleDog } from "./singleDog.js"; 
import { Dog } from "./animals/pets/Dog.js";
import { Cat } from "./animals/pets/Cat.js";
import { Rabbit } from "./animals/pets/Rabbit.js";
import { Parrot } from "./animals/birds/Parrot.js";
import { Sparrow } from "./animals/birds/Sparrow.js";
import { Chicken } from "./animals/birds/Chicken.js";
import { Goldfish } from "./animals/fish/Goldfish.js";
import { Nemofish } from "./animals/fish/Nemofish.js";
import { Salmon } from "./animals/fish/Salmon.js";

const rexius = new singleDog('Rexas', 'juodas', 'vokiecius aviganis');
console.log(rexius);

const brisius = new singleDog('Brisius', 'pilkas', 'haskis');
console.log(brisius);

console.log(rexius.name);
console.log(brisius.breed);

rexius.introduce();

rexius.move(5);

const rikis = new Dog('Rikis', 'baltas');

rikis.sound();

const rainis = new Cat('Rainis', 'juodas');
console.log(rainis);
rainis.sound();
rainis.walk(2);

const rodzeris = new Rabbit('Rodzeris', 'baltas');
console.log(rodzeris);
rodzeris.sound();

const flintas = new Parrot('Flintas', 'zalia');
console.log(flintas);
flintas.repeatSound('ku ku');

const paukstis = new Sparrow('Zvirblis', 'rudas');
console.log(paukstis);

const vista = new Chicken('Gallus domesticus', 'geltonas');
console.log(vista);

const zuvele = new Goldfish('Auksiukas', 'auksinis');
console.log(zuvele);
zuvele.swim(0.1);

const nemo = new Nemofish('Nemo', 'margas');
console.log(nemo);

const lasisa = new Salmon('Lasisa', 'raudona');
console.log(lasisa);