import Vector from "./components/Vector/Vector";

const one = [
  new Vector(-1, 1, 1), // 1 вершина
  new Vector(1, 1, 1), // 4 вершина
  new Vector(-1, -1, 1), // 5 вершина
  new Vector(1, -1, 1), // 8 вершина
];

const two = [
  new Vector(-1, 1, 1), // 2 вершина
  new Vector(-1, 1, -1), // 3 вершина
  new Vector(-1, -1, -1), // 6 вершина
  new Vector(1, -1, -1), // 7 вершина
];

const three = [
  new Vector(1, 1, -1), // 3 вершина
  new Vector(1, 1, 1), // 4 вершина
  new Vector(1, -1, -1), // 7 вершина
  new Vector(1, -1, 1), // 8 вершина
];

const four = [
  new Vector(-1, 1, 1), // 1 вершина
  new Vector(-1, 1, -1), // 2 вершина
  new Vector(-1, -1, 1), // 5 вершина
  new Vector(-1, -1, -1), // 6 вершина
];

const five = [
  new Vector(-1, 1, 1), // 1 вершина
  new Vector(-1, 1, -1), // 2 вершина
  new Vector(1, 1, -1), // 3 вершина
  new Vector(1, 1, 1), // 4 вершина
];

const six = [
  new Vector(-1, -1, 1), // 5 вершина
  new Vector(-1, -1, -1), // 6 вершина
  new Vector(1, -1, -1), // 7 вершина
  new Vector(1, -1, 1), // 8 вершина
];

export const cube = [one, two, three, four, five, six];

export const vertices = [
  new Vector(-1, 1, 1), // 1 вершина
  new Vector(-1, 1, -1), // 2 вершина
  new Vector(1, 1, -1), // 3 вершина
  new Vector(1, 1, 1), // 4 вершина
  new Vector(-1, -1, 1), // 5 вершина
  new Vector(-1, -1, -1), // 6 вершина
  new Vector(1, -1, -1), // 7 вершина
  new Vector(1, -1, 1), // 8 вершина
];
