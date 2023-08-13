import { Icon } from "../../Component/Icon";
import { themes } from "../../themes";
import gmail from "../../assets/images/gmail.png";
import fb from "../../assets/images/fb_icon.svg";
import linkedIn from "../../assets/images/linkedIn_icon.svg";

export const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: `${themes.bgContrast}`,
        color: `${themes.lightText}`,
      }}
    >
      <div style={{ padding: "10rem" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "2em",
            fontSize: "1.5em",
            fontWeight: "300",
          }}
        >
          Connect with me on social media:
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            maxWidth: "300px",
            margin: "0 auto",
          }}
        >
          <Icon
            image={fb}
            url="https://www.facebook.com/profile.php?id=100006354811014"
          />
          <Icon
            image={linkedIn}
            url="https://www.linkedin.com/in/justin-lewis-09bb764b/"
          />
          <Icon
            image={gmail}
            url="https://www.linkedin.com/in/justin-lewis-09bb764b/"
          />
        </div>
      </div>
    </div>
  );
};
