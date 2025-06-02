import Daemon from './characters/Daemon.js'
import Bowerman from "./characters/Bowerman.js";
import Magician from './characters/Magician.js'
import Swordsman from './characters/Swordsman.js'
import Undead from './characters/Undead.js'
import Zombie from './characters/Zombie.js'


export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(member) {
      if (this.members.has(member)) {
        throw new Error('Есть уже');
      } else {
        this.members.add(member)
      } 
    }

    addAll(...members) {
      for (const i of members){
        if (!this.members.has(i)) {
          this.members.add(i);
        }
      }
    }

    toArray() {
      return [...this.members];
    }
}

let team = new Team();
let daemon = new Daemon('daemon');
let bowerman = new Bowerman('bow');
let magician = new Magician('mag');
let sword= new Swordsman('sword');
let undead = new Undead('undead');
let zombie = new Zombie('zombie');

team.add(daemon);
team.add(bowerman);
// team.add(daemon);
team.addAll(magician, sword, undead, zombie);
// console.log(team.toArray());