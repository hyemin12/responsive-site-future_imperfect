import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { data } from "../data";
import { useMenuContext } from "../hooks/menu_context";

import Button from "./Elements/Button";
import SearchInput from "./Elements/SearchInput";

// import { fadeIn } from "./styles/animations";

const Menu = () => {
  const location = useLocation();
  const newPosts = data.slice(0, 4);

  const { isOpenMenu, setIsOpenMenu } = useMenuContext();

  const containerRef = useRef(null);
  const MenuRef = useRef(null);

  /** 메뉴 보여짐/안보여짐 애니메이션 */
  useEffect(() => {
    if (isOpenMenu) {
      containerRef.current.style.display = "block";
      setTimeout(() => {
        containerRef.current.style.opacity = 1;
        MenuRef.current.style.transform = "translateX(0)";
      }, 100);
    } else {
      containerRef.current.style.opacity = 0;
      MenuRef.current.style.transform = "translateX(400px)";
      setTimeout(() => {
        containerRef.current.style.display = "none";
      }, 150);
    }
    return () => clearTimeout();
  }, [isOpenMenu]);

  return (
    <Container
      ref={containerRef}
      onClick={() => {
        setIsOpenMenu(false);
      }}
    >
      <MenuContainer ref={MenuRef} state={isOpenMenu}>
        <Section>
          <SearchInput />
        </Section>
        <Section>
          {newPosts.map(({ id, title, subtitle }) => (
            <LinkWrapper
              key={id}
              to={location.pathname === "/" ? `./post/${id}` : `../post/${id}`}
              onClick={() => setIsOpenMenu(false)}
            >
              <Title>{title}</Title>
              <SubTitle>{subtitle}</SubTitle>
            </LinkWrapper>
          ))}
        </Section>
        <Section>
          <Button text={"log in"} width={"100%"} />
        </Section>
      </MenuContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(244, 244, 244, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  opacity: 0;
  transition: all 0.4s;
`;

const MenuContainer = styled.div`
  width: 400px;
  height: 100vh;
  background-color: #fff;
  border-left: 1px solid rgba(160, 160, 160, 0.3);
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(400px);
  transition: all 0.4s;
  overflow-y: scroll;
`;
const Section = styled.div`
  padding: 3em 3.5em;
  border-bottom: 1px solid rgba(160, 160, 160, 0.3);
  &:last-child {
    border: none;
  }
`;

const Title = styled.h4`
  margin-bottom: 1em;
  color: #3c3b3b;
  font-size: 0.7em;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  letter-spacing: 0.2em;
  transition: 0.4s;
`;
const SubTitle = styled.p`
  color: #646464;
  font-size: 0.65em;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  letter-spacing: 0.2em;
  transition: 0.4s;
`;
const LinkWrapper = styled(Link)`
  display: block;
  padding: 2em 0;
  border-bottom: 1px solid rgba(160, 160, 160, 0.2);
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
  &:hover h4,
  &:hover p {
    color: #2ebaae !important;
  }
`;
export default Menu;

// ${({ state }) =>
//   state
//     ? `display: block;
// opacity: 1;
// transition: 1s;`
//     : ` display: none;
// opacity: 0;
// transition: 1s;`} {
// }
