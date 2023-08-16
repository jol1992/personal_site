import styled from "styled-components";
import { themes } from "../../themes";

export const Navbar = () => {
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 40px;
  `;
  const HiButton = styled.button`
    all: unset;
    border-radius: 50px;
    padding: 10px 15px;
    border: 1px solid ${themes.mainBgColor2};
    &:hover {
      color: white;
      background-color: ${themes.mainBgColor2};
      cursor: pointer;
    }
  `;

  const ButtonConatiner = styled.div`
    margin-left: auto;
  `;

  return (
    <Wrapper>
      <ButtonConatiner>
        <ButtonConatiner>
          <HiButton>Say Hello</HiButton>
        </ButtonConatiner>
      </ButtonConatiner>
    </Wrapper>
  );
};
