import styled from "styled-components";
import { HeaderImage } from "../../Component/HeaderImage";
import computer from "../../website_image.png";
import { useContext } from "react";
import { ViewContext } from "../../Providers/ViewProvider";

export const Content = () => {
  const { isLarge } = useContext(ViewContext);
  const headerSize = isLarge ? "11.5em" : "200px";
  const Wrapper = styled.div`
    text-align: center;
    color: #424656;

    h1 {
      font-size: 2.5em;
    }
    h2 {
      font-size: 1.5em;
      font-weight: 400;
      color: #a6abbd;
    }
    ${!isLarge && "margin: 0 20px;"}
  `;

  const ImageWrapper = styled.div`
    margin: 6em auto;
    height: ${headerSize};
    width: ${headerSize};
  `;

  return (
    <Wrapper>
      <h1>Frontend Developer, Crypto Nerd & Optomist</h1>
      <h2>I love life and creating what comes to mind</h2>
      <ImageWrapper>
        <HeaderImage />
      </ImageWrapper>
      <img src={computer} width={isLarge ? "500px" : "90%"} />
    </Wrapper>
  );
};
