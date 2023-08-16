import styled from "styled-components";
import { themes } from "../../themes";
import { useContext, useEffect, useRef, useState } from "react";
import { ViewContext } from "../../Providers/ViewProvider";

export const Intro = () => {
  const { isLarge } = useContext(ViewContext);
  const Wrapper = styled.div`
    background-color: ${themes.bgContrast};
    color: ${themes.lightText};
  `;
  const ContentWrapper = styled.div`
    margin: auto;
    padding: 12rem 0;
    text-align: center;
    line-height: 42px;
    ${!isLarge && "margin: 0 20px;"}
  `;

  const Heading = styled.div`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2rem;
  `;
  const Body = styled.div`
    font-size: 1.5rem;
    font-weight: 100;
    max-width: 80ch;
    margin: auto;
  `;

  const ref = useRef(null);
  const [isVisable, setIsVisable] = useState(false);
  const [beenSeen, setBeenSeen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entries]) => {
        if (entries.isIntersecting) {
          setBeenSeen(true);
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
      <ContentWrapper ref={ref}>
        {beenSeen && (
          <div>
            <Heading>What's up, I'm Justin</Heading>
            <Body>
              Since beginning my journey as a freelance designer over 11 years
              ago, I've done remote work for agencies, consulted for startups,
              and collaborated with talented people to create digital products
              for both business and consumer use. I'm quietly confident,
              naturally curious, and perpetually working on improving my chops
              one design problem at a time.
            </Body>
          </div>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};
