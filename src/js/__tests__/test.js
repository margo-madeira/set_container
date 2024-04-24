import { Team, Character } from "../app.js";

test("adding character to collection", () => {
  const character = new Character("Маг");
  const team = new Team();
  const testCharcter = new Set([{ name: "Маг" }]);
  const expResult = team.add(character);
  expect(expResult).toEqual(testCharcter);
});

test("add character with error", () => {
  expect(() => {
    const character = new Character("Маг");
    const team = new Team();
    const mag = new Character("Маг");
    const mechnik = new Character("Мечник");
    const args = [mechnik, mag];
    team.addAll(...args);
    const error = new Error("Такой персонаж уже существует");
    const expResult = team.add(character);
  }).toThrow("Такой персонаж уже существует");
});

test("adding all characters to collection", () => {
  const characters = new Set([1, 2, 3]);
  const team = new Team();
  const args = [1, 2, 3];
  const expResult = team.addAll(...args);
  expect(expResult).toEqual(characters);
});

test("collecton to array", () => {
  const arr = [];
  const testArr = [1, 2, 3];
  const team = new Team();
  const args = [1, 2, 3];
  team.addAll(...args);
  const expResult = team.toArray();
  expect(expResult).toEqual(testArr);
});
