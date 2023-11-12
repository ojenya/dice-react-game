import { useMemo } from "react";

import Vector from "@/components/Vector/Vector";
import Matrix from "@/components/Matrix/Matrix";
import { cube, vertices } from "@/consts";
import { getCheckCoords } from "@/lib/utils";

export const useDiceAnswer = (x: number, y: number) => {
  const matrixY = Matrix.getRotationY(y * 90);
  const matrixX = Matrix.getRotationX(x * -90);

  const sceneVertices: Vector[] = vertices
    ?.map((vertice) => Matrix.multiplyVector(matrixY, vertice))
    ?.map((vertice) => Matrix.multiplyVector(matrixX, vertice));

  const result = getCheckCoords(cube, sceneVertices);

  const isOne = [
    result.includes(1),
    result.includes(4),
    result.includes(5),
    result.includes(8),
  ].every(Boolean);

  const sumOfVertices = result?.reduce((acc, cur) => (acc += cur), 0);

  return useMemo(() => {
    if (isOne) {
      return 1;
    } else {
      switch (sumOfVertices) {
        case 26:
          return 6;
        case 10:
          return 5;
        case 14:
          return 4;
        case 22:
          return 3;
        case 18:
          return 2;
        default:
          return 1;
      }
    }
  }, [x, y, sumOfVertices]);
};
