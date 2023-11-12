import { useCurrentRoute } from "@/hooks/useCurrentRoute";
import { FC, PropsWithChildren } from "react";
import { Header } from "../Header/Header";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { title, description } = useCurrentRoute();

  return (
    <>
      <Header />

      <div
        className={
          "mx-auto flex flex-col max-w-7xl items-center justify-between p-6 lg:px-8 h-full"
        }
      >
        <h1
          className={
            "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
          }
        >
          {title}
        </h1>

        <p className="flex align-center justify-center pt-4 text-lg font-normal text-gray-500 w-full dark:text-gray-400">
          {description}
        </p>

        <div
          className={
            "mx-auto w-full flex flex-col max-w-7xl items-center justify-between p-6 lg:px-8 h-full"
          }
        >
          {children}
        </div>
      </div>
    </>
  );
};
