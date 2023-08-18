import styled, { keyframes } from "styled-components";
import { HeaderImage } from "../../Component/HeaderImage";
import computer from "../../website_image.png";
import { useContext, useEffect, useRef, useState } from "react";
import { ViewContext } from "../../Providers/ViewProvider";

export const Content = () => {
  const { isLarge } = useContext(ViewContext);
  const headerSize = isLarge ? "11.5em" : "200px";
  const Wrapper = styled.div`
    text-align: center;
    color: #424656;

    h1 {
      font-size: ${isLarge ? "2.5em" : "1.5em"};
    }
    h2 {
      font-size: ${isLarge ? "1.5em" : ".8em"};
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
  const typing = keyframes`
  from { width: 0 };
  to { width: 100% };
`;
  const blink = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }
`;

  const TypingContainer = styled.div`
    width: max-content;
    margin: 0 auto;
    h2 {
      margin: 0 auto;
      white-space: nowrap;
      border-right: 0.15em solid orange;
      overflow: hidden;

      animation: ${typing} 3.5s steps(40, end), ${blink} 0.75s step-end infinite;
      width: max-content;
    }
  `;

  const ref = useRef(null);
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([items]) => {
        if (items.isIntersecting && ref.current) {
          setIsShowing(true);
        }
      },
      { threshold: 1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  return (
    <Wrapper>
      <h1>Frontend Developer, Crypto Nerd & Optomist</h1>

      <TypingContainer>
        <h2>I love life and creating what comes to mind</h2>
      </TypingContainer>
      <ImageWrapper ref={ref}>
        <HeaderImage isShowing={isShowing} />
      </ImageWrapper>
      <img src={computer} width={isLarge ? "500px" : "90%"} />
    </Wrapper>
  );
};
