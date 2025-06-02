import Team from "../js/Team.js";
import Daemon from '../js/characters/Daemon.js'
import Bowerman from "../js/characters/Bowerman.js";
import Magician from '../js/characters/Magician.js'
import Swordsman from '../js/characters/Swordsman.js'
import Undead from '../js/characters/Undead.js'
import Zombie from '../js/characters/Zombie.js'

describe('test Team.js', () => {

  let team;
  let daemon = new Daemon('daemon');
  let bowerman = new Bowerman('bow');
  let magician = new Magician('mag');
  let sword= new Swordsman('sword');
  let undead = new Undead('undead');
  let zombie = new Zombie('zombie');
  
  beforeEach(() => {
    team = new Team();
  });

  test('add. "Добавить уникальных персонажей"', () => {
    team.add(daemon);
    team.add(bowerman);

    expect(team.members.size).toBe(2);
    expect(team.members.has(daemon)).toBeTruthy();
    expect(team.members.has(bowerman)).toBeTruthy();

  });
    
  test('add. "Добавить существующего персонажа"', () => {
    team.add(daemon);
    team.add(bowerman);
    let funcToThrow = function () {
      team.add(daemon);
    } 
    expect(funcToThrow).toThrow();
  });

  test('addAll. "Добавить нескольких персонажей в том чиле и повторяющихся"', () => {
    team.addAll(magician, sword, undead, zombie, sword, zombie);

    expect(team.members.size).toBe(4);
    expect(team.members.has(magician)).toBeTruthy();
    expect(team.members.has(sword)).toBeTruthy();
    expect(team.members.has(undead)).toBeTruthy();
    expect(team.members.has(zombie)).toBeTruthy();
  });


  test('toArray. "Персонажи в массиве"', () => {
    team.addAll(magician, sword, undead, zombie, sword, zombie);
    team.add(daemon);
    team.add(bowerman);
    let pers = [magician, sword, undead, zombie, sword, zombie, daemon, bowerman]
    let expected = new Set();
    for (let i of pers) {
      expected.add(i)
    }
    expect(team.members.size).toBe(6);
    expect(team.toArray()).toStrictEqual([...expected]);
  });


});