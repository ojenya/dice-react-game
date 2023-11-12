import Dice from "@/components/Dice/Dice";
import { Button } from "@/components/ui/button";
import { DiceContext } from "@/contexts/DiceContext";
import { useContext, useEffect } from "react";
import { useRef, useState } from "react";

import { useDiceAnswer } from "@/hooks/useDiceAnswer";
import { getRandomDegrees } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Kubanych = () => {
  const {
    betScore,

    setHistoryCnt,
    setBetScore,
    setPlayerScore,
  } = useContext(DiceContext);

  const playerCubeRef = useRef<HTMLDivElement>(null);
  const [playerXFlipCount, setPlayerXFlipCount] = useState(0);
  const [playerYFlipCount, setPlayerYFlipCount] = useState(0);
  const playerScores = useDiceAnswer(playerXFlipCount, playerYFlipCount);

  const handleCubeClick = () => {
    const playersDegrees = getRandomDegrees();

    if (playerCubeRef?.current?.style) {
      playerCubeRef.current.style.transform = `rotateX(${playersDegrees.xRnd}deg) rotateY(${playersDegrees.yRnd}deg) rotateZ(0deg)`;

      setPlayerXFlipCount(playersDegrees.xCount);
      setPlayerYFlipCount(playersDegrees.yCount);
    }
    setHistoryCnt((prev) => prev + 1);
  };

  useEffect(() => {
    setPlayerScore(playerScores);
  }, [playerScores]);

  return (
    <div className="flex flex-col">
      <div className="flex w-[500px] justify-center">
        <div className="">
          <Dice cubeRef={playerCubeRef} />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-100 mb-4">
        <h1 className="scroll-m-10  font-extrabold tracking-tight lg:text-1xl mb-2">
          Ваш выбор: {betScore}
        </h1>

        <Tabs
          defaultValue={`${betScore}`}
          className="flex flex-col justify-center align-center"
        >
          <TabsList className="flex  justify-center">
            <TabsTrigger
              value="1"
              onClick={() => {
                setBetScore(1);
                setHistoryCnt(0);
              }}
            >
              1
            </TabsTrigger>
            <TabsTrigger
              value="2"
              onClick={() => {
                setBetScore(2);
                setHistoryCnt(0);
              }}
            >
              2
            </TabsTrigger>
            <TabsTrigger
              value="3"
              onClick={() => {
                setBetScore(3);
                setHistoryCnt(0);
              }}
            >
              3
            </TabsTrigger>
            <TabsTrigger
              value="4"
              onClick={() => {
                setBetScore(4);
                setHistoryCnt(0);
              }}
            >
              4
            </TabsTrigger>
            <TabsTrigger
              value="5"
              onClick={() => {
                setBetScore(5);
                setHistoryCnt(0);
              }}
            >
              5
            </TabsTrigger>
            <TabsTrigger
              value="6"
              onClick={() => {
                setBetScore(6);
                setHistoryCnt(0);
              }}
            >
              6
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex items-center justify-center">
        <Button
          className="flex w-[196px] items-center justify-center"
          variant={"secondary"}
          onClick={handleCubeClick}
        >
          Крутануть
        </Button>
      </div>
    </div>
  );
};

export default Kubanych;
