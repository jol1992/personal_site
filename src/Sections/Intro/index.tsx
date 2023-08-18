import styled, { keyframes } from "styled-components";
import { themes } from "../../themes";
import { useContext, useEffect, useRef, useState } from "react";
import { ViewContext } from "../../Providers/ViewProvider";

export const Intro = () => {
  const { isLarge } = useContext(ViewContext);
  const fadeIN = keyframes`
0%{
opacity:0;
top:100%;
scale:3;

}
20%{
  opacity:0;
  }
100%{
  opacity:1;
  top:0%;
  scale:1;
}
`;
  const Wrapper = styled.div`
    background-color: ${themes.bgContrast};
    color: ${themes.lightText};
  `;
  const ContentWrapper = styled.div<{ beenSeen: boolean }>`
    margin: auto;
    padding: 12rem 0;
    text-align: center;
    line-height: 42px;
    ${!isLarge && "margin: 0 20px;"}
    opacity:${({ beenSeen }) => (beenSeen ? "1" : "0")};
    animation-name: ${({ beenSeen }) => (beenSeen ? fadeIN : undefined)};
    animation-duration: 2s;
    position: relative;
  `;

  const Heading = styled.div`
    font-size: ${isLarge ? "2em" : "1.5em"};
    font-weight: 600;
    margin-bottom: 2rem;
  `;
  const Body = styled.div`
    font-size: ${isLarge ? "2em" : ".7em"};
    font-weight: 100;
    max-width: 80ch;
    margin: auto;
  `;

  const ref = useRef(null);
  const [beenSeen, setBeenSeen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entries]) => {
        if (entries.isIntersecting && ref.current) {
          setBeenSeen(true);
        }
      },
      { threshold: 1, rootMargin: "100px" }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  return (
    <Wrapper>
      <ContentWrapper beenSeen={beenSeen}>
        <div>
          <Heading ref={ref}>What's up, I'm Justin</Heading>
          <Body>
            Hey, I'm Justin, a tech enthusiast and software engineer. I thrive
            on creating and teaching about upcoming technologies. Let's embark
            on this journey together and discover the exciting world of
            innovation!
          </Body>
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};
