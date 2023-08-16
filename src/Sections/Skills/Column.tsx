import styled from "styled-components";
import { themes } from "../../themes";

export const Column: React.FC<{
  icon: string;
  title: string;
  description: string;
  tools: string[];
  languages: string;
}> = ({ title, description, tools, languages, icon }) => {
  const StyledCircle = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${themes.mainContrastColor};
    border-radius: 50%;
    background-image: url("${icon}");
 
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
        <div style={{ maxWidth: "36ch", marginBottom: "20px" }}>
          {description}
        </div>
        <div
          style={{ marginBottom: "10px", color: "#0047B4", fontWeight: "600" }}
        >
          Languages
        </div>
        <div style={{ marginBottom: "20px" }}>{languages}</div>
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
