import Character from "./character.js";

export default class Bowerman extends Character {
    constructor(name) {
        super(name);
        this.attack = 25;
        this.defence = 25;
    }
}