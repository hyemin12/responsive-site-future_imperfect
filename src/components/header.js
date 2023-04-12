import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import { useMenuContext } from "../hooks/menu_context";
import theme from "./styles/theme";

import Icon from "./Elements/Icon";
import SearchInput from "./Elements/SearchInput";

import { FaSearch, FaBars } from "react-icons/fa";

const links = ["lorem", "ipsum", "feugiat", "tempus", "adipiscing"];

const Header = () => {
  const { setVisibleMenu } = useMenuContext();

  const [visibleSearch, setVisibleSearch] = useState(false);

  const toggleVisibleSearch = (e) => {
    if (e.target.id === "search-input") {
      return;
    }
    setVisibleSearch(!visibleSearch);
  };

  return (
    <HeaderContainer theme={theme}>
      <Link to="/">
        <H4>Future imperfect</H4>
      </Link>
      <NavContainer theme={theme}>
        {links.map((link) => (
          <NavItem
            to="#"
            onClick={(e) => e.preventDefault}
            key={link}
            theme={theme}
          >
            {link}
          </NavItem>
        ))}
      </NavContainer>
      <IconWrapper theme={theme} onClick={toggleVisibleSearch}>
        <SearchIcon theme={theme} visible={visibleSearch}>
          <Icon icon={<FaSearch />} />
          <SearchInput icon={false} visible={visibleSearch} />
        </SearchIcon>
        <IconItem
          theme={theme}
          onClick={() => {
            setVisibleMenu(true);
          }}
        >
          <Icon icon={<FaBars />} />
        </IconItem>
      </IconWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  ${({ theme }) => theme.flexBox.flex()}
  width: 100%;
  height: 56px;
  background-color: #fff;
  padding-left: 1.2em;
  border-bottom: ${({ theme }) => theme.color.border};
  position: fixed;
  z-index: 9;
  @media ${({ theme }) => theme.device.tabletPortrait} {
    justify-content: space-between;
  }
`;
const H4 = styled.h4`
  color: #3c3b3b;
  font-size: 0.7em;
  letter-spacing: 0.3em;
  text-transform: uppercase;
`;
const NavContainer = styled.div`
  ${({ theme }) => theme.flexBox.flex()}
  flex-grow: 1;
  height: 100%;
  margin-left: 1.2em;
  padding-left: 0.5em;
  border-left: ${({ theme }) => theme.color.border};
  @media ${({ theme }) => theme.device.tabletPortrait} {
    display: none;
  }
`;
const NavItem = styled(NavLink)`
  padding: 0 1.3em;
  border-right: ${({ theme }) => theme.color.border};
  font-size: 0.7em;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  &:last-child {
    border-right: none;
  }
`;
const IconWrapper = styled.ul`
  display: flex;
  height: 100%;
  position: relative;
`;

const IconItem = styled.li`
  ${({ theme }) => theme.flexBox.flex("row", "center", "center")}
  width: 64px;
  height: 100%;
  border-left: ${({ theme }) => theme.color.border};
  border-right: ${({ theme }) => theme.color.border};
  cursor: pointer;
  &:last-child {
    border: none;
  }
`;
const SearchIcon = styled(IconItem)`
  transition: 0.4s;
  ${({ visible }) =>
    visible
      ? `
      width: 300px;
  padding: 0 20px;
  form {
    width: 100%;
    margin-left: 20px;
    opacity: 1;
  }`
      : ` 
  padding: 0;
  right:64px;
  form {
    width: 0;
    margin-left: 0;
    opacity: 0;
  }`}
`;
export default Header;
