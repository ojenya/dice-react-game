import { useToast } from "@/components/ui/use-toast";
import React, { useEffect, useMemo, useState } from "react";

export interface ContextProps {
  gameType: "type1" | "type2";
  playerScore: number;
  betScore: number;
  cheapSkynetScore: number;
  setHistoryCnt: React.Dispatch<React.SetStateAction<number>>;
  setGameType: React.Dispatch<React.SetStateAction<"type1" | "type2">>;
  setBetScore: React.Dispatch<React.SetStateAction<number>>;
  setPlayerScore: React.Dispatch<React.SetStateAction<number>>;
  setCheapSkynetScore: React.Dispatch<React.SetStateAction<number>>;
}

export const DiceContext = React.createContext<ContextProps>(
  {} as ContextProps
);

export const DiceContextProvider: React.FC<
  React.PropsWithChildren<unknown>
> = ({ children }) => {
  const [gameType, setGameType] = useState<"type1" | "type2">("type1");
  const [playerScore, setPlayerScore] = useState<number>(1);
  const [cheapSkynetScore, setCheapSkynetScore] = useState<number>(1);
  const [betScore, setBetScore] = useState<number>(1);
  const [historyCnt, setHistoryCnt] = useState<number>(0);
  const { toast } = useToast();

  useEffect(() => {
    if (historyCnt > 0) {
      if (gameType === "type1") {
        if (betScore === playerScore) {
          toast({
            variant: "default",
            title: "С заносиком!",
            description: "Вы угадали))",
          });
        } else {
          toast({
            variant: "destructive",
            title: "Земля металлом!",
            description: "Вы не угадали((",
          });
        }
      }
      if (gameType === "type2") {
        if (playerScore > 4) {
          toast({
            variant: "default",
            title: "С заносиком!",
            description: "Вы победили))",
          });
        } else if (playerScore === cheapSkynetScore) {
          toast({
            variant: "default",
            title: "Рофлан хм..!",
            description: "Ничья, так ничья-_-",
          });
        } else {
          toast({
            variant: "destructive",
            title: "Земля металлом!",
            description: "Вы проиграли((",
          });
        }
      }
    }
  }, [gameType, playerScore, cheapSkynetScore, historyCnt, betScore]);

  const contextValue = useMemo(
    () => ({
      playerScore,
      cheapSkynetScore,
      betScore,
      gameType,
      setHistoryCnt,
      setGameType,
      setPlayerScore,
      setCheapSkynetScore,
      setBetScore,
    }),
    [playerScore, cheapSkynetScore, betScore, gameType]
  );

  return (
    <DiceContext.Provider value={contextValue}>{children}</DiceContext.Provider>
  );
};
