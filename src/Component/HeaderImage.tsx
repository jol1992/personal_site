import { FC, useContext } from "react";
import styled, { keyframes } from "styled-components";
import cat from "../assets/images/cat.png";
import justin from "../assets/images/justin.png";
import { ViewContext } from "../Providers/ViewProvider";
import { themes } from "../themes";
const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: white;

  top: -120px;
  margin: 0 auto;
  right: 0;
  left: 0;
  overflow: hidden;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`;

const fadeIN = keyframes`
0%{
opacity:0;
top:100%;
}
20%{
  opacity:0;
  }
100%{
  opacity:1;
  top:0%;
}
`;

const Image = styled.img<{ isVisable: boolean }>`
  max-width: 100%;
  max-height: 100%;
  margin-top: auto;
  bottom: 0;
  display: inline-block;
  animation-name: ${fadeIN};
  animation-duration: 2s;
  position: relative;
`;

const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
const Front = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: ${themes.bgContrast};
  display: flex;
`;

export const HeaderImage: React.FC<{ isShowing: boolean }> = ({
  isShowing,
}) => {
  return (
    <HeaderContainer>
      <Inner>
        <Front>
          {isShowing && <Image src={justin} isVisable={isShowing} />}
        </Front>
      </Inner>
    </HeaderContainer>
  );
};
