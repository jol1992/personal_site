import styled from "styled-components";
import { Column } from "./Column";
import codingIcon from "../../devops.png";
import backendIcon from "../../dashboard.png";
import { useContext } from "react";
import { ViewContext } from "../../Providers/ViewProvider";

export const Skill = () => {
  const { isLarge } = useContext(ViewContext);
  const Wrapper = styled.div`
    border-radius: 50px;
    position: relative;
    top: -100px;
    background-color: white;
    width: ${isLarge ? "80%" : "calc( 100% - 20px)"};
    max-width: 1200px;
    margin: auto;
    border: solid 1px #8290bb;
    box-shadow: #656565 3px 6px 8px 0px;
  `;

  const Content = styled.div`
    display: flex;
    justify-items: center;
    padding: 50px 30px;
    flex-wrap: wrap;
    gap: 3em;
  `;
  return (
    <Wrapper>
      <Content>
        <Column
          icon={codingIcon}
          title="Frontend Developer"
          description="Visually, this is where I show my creative side."
          tools={["VS Code", "Git", "Jira", "Figma", "Chrome Dev Tools"]}
          languages={"HTML, CSS, Java, Css, React, Typescript, Python"}
        />
        <Column
          icon={backendIcon}
          title="Backend Developer"
          description="Sometimes if I need data, I go get it myself."
          languages="Powershell, Kornshell, Node.js, MongoDb"
          tools={["VS Code", "Git", "Windows Temrminal"]}
        />
      </Content>
    </Wrapper>
  );
};
