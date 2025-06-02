import Character from "./character.js";

export default class Zombie extends Character {
    constructor(name) {
        super(name);
        this.attack = 40;
        this.defence = 10;
    }
}