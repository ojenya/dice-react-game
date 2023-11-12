import { ReactElement } from "react";

import { HomeWork1 } from "./pages/HomeWork1/Homework1";
import { HomeWork2 } from "./pages/HomeWork2/HomeWork2";
import { DiceContextProvider } from "./contexts/DiceContext";

interface IRoute {
  title: string;
  description?: string;
  element: ReactElement;
}

export const routesConfig: Record<string, IRoute> = {
  ["/homework1"]: {
    title: "Домашнее задание №1",
    description: "Реализовать игральную кость.",
    element: (
      <DiceContextProvider>
        <HomeWork1 />
      </DiceContextProvider>
    ),
  },
  ["/homework2"]: {
    title: "Домашнее задание №2",
    description: "",
    element: <HomeWork2 />,
  },
};

export const routes = Object.keys(routesConfig);
