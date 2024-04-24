const arr = [];

export class Character {
  constructor(name) {
    this.name = name;
  }
}
export class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    const error = new Error("Такой персонаж уже существует");
    if(this.members.size !== 0) {
      for(const person of this.members) {
        if (person.name === character.name) {
          throw error;
        } else {
          this.members.add(character);
        }
      }
    }
    this.members.add(character);
        
    return this.members;
  }

  addAll(...args) {
    for (const person of args) {
      this.members.add(person);
    }
    return this.members;
  }

  toArray() {
    this.members.forEach((el) => arr.push(el));
    return arr;
  }
}
const team = new Team();
const character = new Character("Маг");
