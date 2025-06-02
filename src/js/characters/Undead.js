import Character from "./character.js";

export default class Undead extends Character {
    constructor(name) {
        super(name);
        this.attack = 25;
        this.defence = 25;
    }
}