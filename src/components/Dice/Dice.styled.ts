import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.section`
  width: 200px;
  height: 200px;
  position: relative;
  perspective: 2000px;
  perspective-origin: 50% 100%;
  top: -60px;
  margin-bottom: 90px;
  z-index: 0;
`;

export const One = styled.div`
  .dot1 {
    top: 85px;
    left: 85px;
  }
`;

export const Two = styled.div`
  .dot1 {
    top: 45px;
    left: 45px;
  }

  .dot2 {
    top: 125px;
    left: 125px;
  }
`;
export const Three = styled.div`
  .dot1 {
    top: 45px;
    left: 45px;
  }
  .dot2 {
    top: 85px;
    left: 85px;
  }
  .dot3 {
    top: 125px;
    left: 125px;
  }
`;

export const Four = styled.div`
  .dot1 {
    top: 45px;
    left: 45px;
  }
  .dot2 {
    top: 45px;
    left: 125px;
  }
  .dot3 {
    top: 125px;
    left: 45px;
  }
  .dot4 {
    top: 125px;
    left: 125px;
  }
`;

export const Five = styled.div`
  .dot1 {
    top: 45px;
    left: 45px;
  }
  .dot2 {
    top: 45px;
    left: 125px;
  }
  .dot3 {
    top: 85px;
    left: 85px;
  }
  .dot4 {
    top: 125px;
    left: 45px;
  }
  .dot5 {
    top: 125px;
    left: 125px;
  }
`;

export const Six = styled.div`
  .dot1 {
    top: 45px;
    left: 45px;
  }
  .dot2 {
    top: 45px;
    left: 85px;
  }
  .dot3 {
    top: 45px;
    left: 125px;
  }
  .dot4 {
    top: 125px;
    left: 45px;
  }
  .dot5 {
    top: 125px;
    left: 85px;
  }
  .dot6 {
    top: 125px;
    left: 125px;
  }
`;

export const Cube = styled.div`
  width: 100%;
  height: 100%;
  top: 100px;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 3s;

  ${One} {
    transform: translateZ(100px);
  }

  ${Two} {
    transform: rotateX(-180deg) translateZ(100px);
  }

  ${Three} {
    transform: rotateY(90deg) translateZ(100px);
  }

  ${Four} {
    transform: rotateY(-90deg) translateZ(100px);
  }

  ${Five} {
    transform: rotateX(90deg) translateZ(100px);
  }

  ${Six} {
    transform: rotateX(-90deg) translateZ(100px);
  }

  div {
    background: #eee;
    display: block;
    position: absolute;
    width: 200px;
    height: 200px;
    border: 2px solid #d1d1d1;
    margin: 0 auto;
    font-size: 500%;
    text-align: center;
    padding: 50px 0;
  }
`;

export const Dot = styled.span`
  display: block;
  position: absolute;
  width: 30px;
  height: 30px;
  background: #303030;
  border-radius: 15px;
`;
