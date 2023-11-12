import Dice from "@/components/Dice/Dice";
import { Button } from "@/components/ui/button";
import { DiceContext } from "@/contexts/DiceContext";
import { useContext, useEffect } from "react";
import { useRef, useState } from "react";
import { useDiceAnswer } from "@/hooks/useDiceAnswer";
import { getRandomDegrees } from "@/lib/utils";

const Battle = () => {
  const { setHistoryCnt, setCheapSkynetScore, setPlayerScore } =
    useContext(DiceContext);
  const playerCubeRef = useRef<HTMLDivElement>(null);
  const skynetCubeRef = useRef<HTMLDivElement>(null);
  const [playerXFlipCount, setPlayerXFlipCount] = useState(0);
  const [playerYFlipCount, setPlayerYFlipCount] = useState(0);
  const [skynetXFlipCount, setSkynetXFlipCount] = useState(0);
  const [skynetYFlipCount, setSkynetYFlipCount] = useState(0);

  const playerScores = useDiceAnswer(playerXFlipCount, playerYFlipCount);
  const skynetScores = useDiceAnswer(skynetXFlipCount, skynetYFlipCount);

  const handleCubeClick = () => {
    const playersDegrees = getRandomDegrees();
    const skynetDegrees = getRandomDegrees();
    if (playerCubeRef?.current?.style) {
      playerCubeRef.current.style.transform = `rotateX(${playersDegrees.xRnd}deg) rotateY(${playersDegrees.yRnd}deg) rotateZ(0deg)`;

      setPlayerXFlipCount(playersDegrees.xCount);
      setPlayerYFlipCount(playersDegrees.yCount);
    }

    if (skynetCubeRef?.current?.style) {
      skynetCubeRef.current.style.transform = `rotateX(${skynetDegrees.xRnd}deg) rotateY(${skynetDegrees.yRnd}deg) rotateZ(0deg)`;

      setSkynetXFlipCount(skynetDegrees.xCount);
      setSkynetYFlipCount(skynetDegrees.yCount);
    }
    setHistoryCnt((prev) => prev + 1);
  };

  useEffect(() => {
    setPlayerScore(playerScores);
    setCheapSkynetScore(skynetScores);
  }, [playerScores, skynetScores]);

  return (
    <div className="flex flex-col">
      <div className="flex w-[500px] justify-between">
        <div className="mr-7 mt-3">
          <Dice cubeRef={playerCubeRef} title="Ваш кубан" />
        </div>
        <div className="ml-7 mt-3">
          <Dice cubeRef={skynetCubeRef} title="Не ваш кубан" />
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          className="w-[250px]"
          variant={"secondary"}
          onClick={handleCubeClick}
        >
          Крутануть
        </Button>
      </div>
    </div>
  );
};

export default Battle;
