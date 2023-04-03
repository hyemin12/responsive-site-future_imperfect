import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaRss,
  FaEnvelope,
} from "react-icons/fa";
import styled from "styled-components";
import Icon from "./Elements/Icon";
import TextLink from "./Elements/TextLink";

const Footer = () => {
  const socials = [
    { link: "https://twitter.com/?lang=ko", icon: <FaTwitter /> },
    { link: "https://ko-kr.facebook.com/", icon: <FaFacebookF /> },
    { link: "https://www.instagram.com/", icon: <FaInstagram /> },
    { link: "#", icon: <FaRss /> },
    { link: "https://www.naver.com/", icon: <FaEnvelope /> },
  ];
  return (
    <footer>
      <SocialContainer>
        {socials.map(({ link, icon }) => (
          <a href={link} target="_blank" rel="noreferrer" key={link}>
            <Icon icon={icon} />
          </a>
        ))}
      </SocialContainer>
      <Copyright>
        © UNTITLED. DESIGN:
        <TextLink text={"HTML5 UP"} path={"http://html5up.net/"} />. IMAGES:
        <TextLink text={"UNSPLASH"} path={"http://unsplash.com/"} />.
      </Copyright>
    </footer>
  );
};
const SocialContainer = styled.div`
  display: flex;
  gap: 1em;
  margin-bottom: 2em;
`;
const Copyright = styled.p`
  font-size: 0.6em;
  letter-spacing: 0.2em;
  opacity: 0.6;
`;
export default Footer;
