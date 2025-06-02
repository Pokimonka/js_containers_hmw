export default class Character {
    constructor(name) {
        this.name = this.setName(name);
        this.type = this.constructor.name;
        this.health = 100;
        this.level = 1;
        this.attack = 0;
        this.defence = 0;
    }

    setName(name) {
        if (!name) {
            throw new Error('Параметр Имя не задан!!')
        }
        const trimedName = name.trim();
        if (trimedName.length < 2 || trimedName.length > 10) {
            throw new Error('Имя должно содержать от 2 до 10 символов!')
        }
        return trimedName;
    }

    levelUp() {
        if (!this.health) {
            throw new Error('We lost him');
        }
        this.level += 1;
        this.attack += this.attack * 0.2;
        this.defence += this.defence * 0.2;

    }

    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100)
        }
    }
}