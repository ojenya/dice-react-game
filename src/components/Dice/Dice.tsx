import React from "react";
import * as S from "./Dice.styled";

interface IDiceProps {
  cubeRef: React.RefObject<HTMLDivElement>;
  title?: string;
}

export const Dice: React.FC<IDiceProps> = ({ cubeRef, title }) => {
  return (
    <>
      <S.Wrapper>
        {title && (
          <h1 className="scroll-m-10  font-extrabold tracking-tight lg:text-3xl z-50">
            {title}
          </h1>
        )}

        <S.Container>
          <S.Cube ref={cubeRef}>
            <S.One>
              <S.Dot className="dot1" />
            </S.One>
            <S.Two>
              <S.Dot className="dot1" />
              <S.Dot className="dot2" />
            </S.Two>
            <S.Three>
              <S.Dot className="dot1" />
              <S.Dot className="dot2" />
              <S.Dot className="dot3" />
            </S.Three>
            <S.Four>
              <S.Dot className="dot1" />
              <S.Dot className="dot2" />
              <S.Dot className="dot3" />
              <S.Dot className="dot4" />
            </S.Four>
            <S.Five>
              <S.Dot className="dot1" />
              <S.Dot className="dot2" />
              <S.Dot className="dot3" />
              <S.Dot className="dot4" />
              <S.Dot className="dot5" />
            </S.Five>
            <S.Six>
              <S.Dot className="dot1" />
              <S.Dot className="dot2" />
              <S.Dot className="dot3" />
              <S.Dot className="dot4" />
              <S.Dot className="dot5" />
              <S.Dot className="dot6" />
            </S.Six>
          </S.Cube>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default Dice;
