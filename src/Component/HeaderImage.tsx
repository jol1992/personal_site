import { useContext } from "react";
import styled from "styled-components";
import cat from "../assets/images/cat.png";
import justin from "../assets/images/justin.png";
import { ViewContext } from "../Providers/ViewProvider";
import { themes } from "../themes";
const HeaderContainer = styled.div`
  width: 15em;
  height: 15em;
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
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-top: auto;
  bottom: 0;
  display: inline-block;
  filter: grayscale(1);
`;

const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  // &:hover {
  //   transform: rotateY(180deg);
  // }
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
const Back = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #ffe495;
  transform: rotateY(180deg);
  &:hover {
    cursor: pointer;
  }
`;
export const HeaderImage = () => {
  const { setPage, page } = useContext(ViewContext);

  const handleClick = () => {
    const showPersonal = page === "Professional";
    setPage(showPersonal ? "Personal" : "Professional");
  };

  const frontImage = page === "Professional" ? justin : cat;
  const backImage = page === "Professional" ? cat : justin;
  return (
    <HeaderContainer>
      <Inner>
        <Front>
          <Image src={frontImage} />
        </Front>
        {/* <Back onClick={handleClick}>
          <Image src={backImage} />
        </Back> */}
      </Inner>
    </HeaderContainer>
  );
};
