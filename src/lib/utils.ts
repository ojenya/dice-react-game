import Vector from "@/components/Vector/Vector";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCheckCoords(cube: Vector[][], vectors: Vector[]) {
  const result = [];
  for (let i = 0; i < vectors.length; i++) {
    const t = vectors[i].getCoords().map(Math.round);
    for (let j = 0; j < cube[0].length; j++) {
      if (t.toString() === cube[0][j].getCoords().toString()) {
        result.push(i + 1);
      }
    }
  }
  return result;
}

export const getRandomDegrees = () => {
  const min = 0;
  const max = 10;
  const xRnd = Math.floor(Math.random() * (max - min) + min) * 90;;
  const yRnd = Math.floor(Math.random() * (max - min) + min) * 90;;
  const xCount = (xRnd / 90) % 4;
  const yCount = (yRnd / 90) % 4;
  return { xRnd, yRnd, xCount, yCount };
};
