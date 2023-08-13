import styled from "styled-components";
import { themes } from "../../themes";
import codingIcon from "../../devops.png";

export const Column: React.FC<{
  title: string;
  description: string;
  tools: string[];
}> = ({ title, description, tools }) => {
  const StyledCircle = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${themes.mainContrastColor};
    border-radius: 50%;
    background-image: url("${codingIcon}");
 
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
}

  `;
  const Wrapper = styled.div`
    flex: 1;
    justify-content: center;
    display: flex;
    text-align: center;
  `;

  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <StyledCircle />
        <h2>{title}</h2>
        <div style={{ width: "36ch", marginBottom: "20px" }}>{description}</div>
        <div
          style={{ marginBottom: "10px", color: "#0047B4", fontWeight: "600" }}
        >
          Languages
        </div>
        <div style={{ marginBottom: "20px" }}>
          HTML, CSS, Java, Css, React, Typescript, Python
        </div>
        <div
          style={{ marginBottom: "10px", color: "#0047B4", fontWeight: "600" }}
        >
          Dev Tools:
        </div>
        <div>
          {tools.map((tool) => {
            return <div>{tool}</div>;
          })}
        </div>
      </div>
    </Wrapper>
  );
};
