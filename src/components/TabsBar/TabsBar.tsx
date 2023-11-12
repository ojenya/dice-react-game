import { useContext } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DiceContext } from "@/contexts/DiceContext";
import styled from "styled-components";
import Kubanych from "@/pages/HomeWork1/components/Kubanych";
import Battle from "@/pages/HomeWork1/components/Battle";

const TabsBar = () => {
  const { gameType, setGameType } = useContext(DiceContext);

  return (
    <div className="flex w-full m-1 justify-center ">
      <Tabs
        defaultValue="papi4"
        className="flex flex-col justify-center align-center w-[250px]"
      >
        <TabsList className="flex  justify-center z-40">
          <TabsTrigger value="papi4" onClick={() => setGameType("type1")}>
            Кубаныч by Папзаныч
          </TabsTrigger>
          <TabsTrigger value="battle" onClick={() => setGameType("type2")}>
            Заруба
          </TabsTrigger>
        </TabsList>
        <StyledTabContainer
          className="w-[900px] flex justify-center"
          type={gameType}
        >
          <TabsContent value="papi4" className="flex">
            <Kubanych />
          </TabsContent>
          <TabsContent value="battle" className="flex">
            <Battle />
          </TabsContent>
        </StyledTabContainer>
      </Tabs>
    </div>
  );
};

export default TabsBar;

const StyledTabContainer = styled.div<{ type?: "type1" | "type2" }>`
  margin-left: ${({ type }) => (type === "type1" ? "-20rem" : "-20rem")};
`;
