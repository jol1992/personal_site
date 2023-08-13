import styled from "styled-components";
import { Column } from "./Column";

export const Skill = () => {
  const Wrapper = styled.div`
    border-radius: 50px;
    position: relative;
    top: -100px;
    background-color: white;
    width: 80%;
    max-width: 1200px;
    margin: auto;
    border: solid 1px #8290bb;
    box-shadow: #656565 3px 6px 8px 0px;
  `;

  const Content = styled.div`
    display: flex;
    justify-items: center;
    padding: 50px 30px;
  `;
  return (
    <Wrapper>
      <Content>
        <Column
          title="Frontend Developer"
          description="    I like to code things from scratch, and enjoy bringing ideas to life
          in the browser."
          tools={["VS Code", "Git", "Jira", "Figma", "Chrome Dev Tools"]}
        />
        {/* <Column tools={[]} /> */}
      </Content>
    </Wrapper>
  );
};
