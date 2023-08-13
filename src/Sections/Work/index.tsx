import styled from "styled-components";
import ally from "../../assets/images/allybank.svg";
import microsoft from "../../assets/images/microsoft.svg";
import stateFarm from "../../assets/images/statefarm.png";
import jamVisions from "../../assets/images/jamvisions.svg";
import { themes } from "../../themes";

export const Work = () => {
  const GridItem = styled.div`
    width: 200px;
    height: 200px;
    // background-color: ${themes.ligherColor};
    border-radius: 20px;
    margin: auto;
    padding: 30px;
    display: flex;
  `;

  const CompanyLogo = styled.div<{ company: string }>`
    background-image: url("${({ company }) => company}");
    height: 60%;
    width: 60%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: auto;
  `;
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "auto",
        display: "flex",
        textAlign: "center",
        marginBottom: "5rem",
      }}
    >
      <div style={{ width: "100%" }}>
        <h2 style={{ marginBottom: "7rem" }}>Companies Ive worked for</h2>
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",

              gap: "10px",
              maxWidth: "500px",
              margin: "auto",
            }}
          >
            <GridItem>
              <CompanyLogo company={ally} />
            </GridItem>
            <GridItem>
              <CompanyLogo company={microsoft} />
            </GridItem>
            <GridItem>
              <CompanyLogo company={jamVisions} />
            </GridItem>
            <GridItem>
              <CompanyLogo company={stateFarm} />
            </GridItem>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
