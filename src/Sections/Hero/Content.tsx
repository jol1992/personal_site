import styled from "styled-components";
import { HeaderImage } from "../../Component/HeaderImage";
import computer from "../../website_image.png";

export const Content = () => {
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
  `;

  const ImageWrapper = styled.div`
    margin: 6em;
  `;
  return (
    <Wrapper>
      <h1>Frontend Developer, Crypto Nerd & Optomist</h1>
      <h2>I love life and creating what comes to mind</h2>
      <ImageWrapper>
        <HeaderImage />
      </ImageWrapper>
      <img src={computer} width="500px" />
    </Wrapper>
  );
};
