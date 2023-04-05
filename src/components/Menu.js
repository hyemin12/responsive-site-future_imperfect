import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { data } from "../data";
import { useMenuContext } from "../hooks/menu_context";

import Button from "./Elements/Button";
import SearchInput from "./Elements/SearchInput";
import { useRef } from "react";
import { useEffect } from "react";
import { fadeIn, fadeOut } from "./styles/animations";

const Menu = () => {
  const location = useLocation();
  const newPosts = data.slice(0, 4);
  const { isOpenMenu, setIsOpenMenu } = useMenuContext();
  // const[isOpen,setOpen]
  const containerRef = useRef(null);
  const MenuRef = useRef(null);

  console.log(containerRef, MenuRef);

  const isOpenF = () => {
    if (isOpenMenu) {
      containerRef.current.style.transition = "0.4s";
      containerRef.current.style.display = "block";
      containerRef.current.style.opacity = 1;
      MenuRef.current.style.animationName = slideLeft;
      MenuRef.current.style.animationDuration = ` 0.4s`;
      // MenuRef.current.style.transform = "translateX(-400px)";
      MenuRef.current.style.right = 0;
    } else {
      containerRef.current.animationName = fadeOut;
      containerRef.current.style.display = "none";
    }
  };
  useEffect(() => {
    isOpenF();
  }, [isOpenMenu]);

  return (
    <Container
      state={isOpenMenu}
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
  display: none;
  width: 100%;
  height: 100%;
  background-color: rgba(244, 244, 244, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  opacity: 0;
  animation-duration: 0.4s;
`;
const slideLeft = keyframes`
transform : translate(400px)
`;
const MenuContainer = styled.div`
  width: 400px;
  height: 100vh;
  background-color: #fff;
  border-left: 1px solid rgba(160, 160, 160, 0.3);
  position: absolute;
  top: 0;
  right: -400px;
  transition: 0.4s;
  overflow-y: scroll;
  animation-duration: 0.4s;
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
