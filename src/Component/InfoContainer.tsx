import styled from "styled-components";
import cat from "../assets/images/cat.png";
import microsoft from "../assets/images/microsoft.svg";
import ally from "../assets/images/allybank.svg";
import statefarm from "../assets/images/statefarm.png";
import jamvisions from "../assets/images/jamvisions.svg";
import gmail from "../assets/images/gmail.png";
import fb from "../assets/images/fb_icon.svg";
import linkedIn from "../assets/images/linkedIn_icon.svg";
import { Icon } from "./Icon";
import { HeaderImage } from "./HeaderImage";
import { useContext } from "react";
import { ViewContext } from "../Providers/ViewProvider";
import { themes } from "../themes";

const Container = styled.div`
  width: 500px;
  box-shadow: grey 9px 10px 16px 1px;
  background-color: #001f3f;
  color: ${themes.lightText};
  margin: 10em auto;
  padding: 3em;
  border-radius: 10px;
  position: relative;
`;
const IconContainer = styled.div`
  display: flex;
  padding: 1em;
  justify-content: space-evenly;
  align-items: center;
  margin-top: auto;
  margin-bottom: 2em;
`;
const ContactIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: auto;
  gap: 5px;
`;

const Title = styled.div`
  font-size: 3em;
`;
const SubHeading = styled.div`
  font-size: 1.5em;
  font-weight: 300;
`;
const SubTitle = styled.div`
  font-size: 1em;
  color: #ffe495;
  margin-bottom: 2em;
`;
const Body = styled.div`
  margin-bottom: 5em;
`;
const Contact = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1em;
`;

const ExperinceContainer = styled.div`
  background-color: ${themes.mainBgColor2};
  border-radius: 4px;
`;
export const InfoContainer = () => {
  const { setPage, page } = useContext(ViewContext);
  return (
    <Container>
      <HeaderImage />
      <Title>Justin Lewis</Title>
      <SubTitle>Software Developer</SubTitle>
      <Body>
        <SubHeading>Hi, I'm Justin.</SubHeading>
        <div></div>
      </Body>
      <ExperinceContainer>
        <div style={{ marginLeft: "1em", display: "block" }}>
          I've done work for
        </div>
        <IconContainer>
          <Icon image={jamvisions} width="55" />
          <Icon image={ally} width="55" />
          <Icon image={statefarm} width="55" />
          <Icon image={microsoft} width="45" />
        </IconContainer>
      </ExperinceContainer>
      <Contact>
        <div>Contact Me</div>
      </Contact>
      <ContactIconContainer>
        <Icon
          image={fb}
          width="35"
          url="https://www.facebook.com/profile.php?id=100006354811014"
        />
        <Icon
          image={linkedIn}
          width="35"
          url="https://www.facebook.com/profile.php?id=100006354811014"
        />
        <Icon
          image={gmail}
          width="35"
          url="https://www.linkedin.com/in/justin-lewis-09bb764b/"
        />
      </ContactIconContainer>
    </Container>
  );
};
