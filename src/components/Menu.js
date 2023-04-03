import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import Button from "./Elements/Button";
import SearchInput from "./Elements/SearchInput";

import { data } from "../data";
import { useMenuContext } from "../hooks/menu_context";
import { useRef } from "react";

const Menu = () => {
  const location = useLocation();
  const newPosts = data.slice(0, 4);
  const outside = useRef();
  const { setIsOpenMenu } = useMenuContext();
  const closeModal = () => {
    // if (outside.current) setIsOpenMenu(false);
  };
  return (
    <Container onClick={() => setIsOpenMenu(false)}>
      <MenuContainer>
        <Section>
          <SearchInput />
        </Section>
        <Section>
          {newPosts.map(({ id, title, subtitle }) => (
            <LinkWrapper
              key={id}
              to={
                location.pathname === "/" ? `./post/:${id}` : `../post/:${id}`
              }
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
`;
const MenuContainer = styled.div`
  width: 400px;
  height: 100vh;
  background-color: #fff;
  border-left: 1px solid rgba(160, 160, 160, 0.3);
  position: absolute;
  top: 0;
  right: 0;
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
