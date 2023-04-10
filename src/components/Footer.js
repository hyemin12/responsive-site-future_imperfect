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
import { useLocation } from "react-router-dom";
import theme from "./styles/theme";

const Footer = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const socials = [
    { link: "https://twitter.com/?lang=ko", icon: <FaTwitter /> },
    { link: "https://ko-kr.facebook.com/", icon: <FaFacebookF /> },
    { link: "https://www.instagram.com/", icon: <FaInstagram /> },
    { link: "#", icon: <FaRss /> },
    { link: "https://www.naver.com/", icon: <FaEnvelope /> },
  ];

  return (
    <FooterContainer isMainPage={isMainPage} theme={theme}>
      <SocialContainer isMainPage={isMainPage}>
        {socials.map(({ link, icon }) => (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            key={link}
            style={{ width: "auto" }}
          >
            <Icon icon={icon} />
          </a>
        ))}
      </SocialContainer>
      <Copyright>
        © UNTITLED. DESIGN:
        <TextLink offset={0} text={"HTML5 UP"} path={"http://html5up.net/"} />.
        IMAGES:
        <TextLink offset={0} text={"UNSPLASH"} path={"http://unsplash.com/"} />.
      </Copyright>
    </FooterContainer>
  );
};

// 메인페이지 아닐 경우 가운데 정렬
const FooterContainer = styled.footer`
  ${({ isMainPage, theme }) =>
    !isMainPage &&
    `${theme.flexBox.flex("column", "center", "start")};margin-bottom: 4em;`};
`;
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
