import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Logo from "./Logo";

import { FaSearch, FaBars } from "react-icons/fa";

const links = ["lorem", "ipsum", "feugiat", "tempus", "adipiscing"];

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <NavContainer>
        {links.map((link) => (
          <NavItem to="#" onClick={(e) => e.preventDefault} key={link}>
            {link}
          </NavItem>
        ))}
      </NavContainer>
      <Icon>
        <FaSearch />
      </Icon>
      <Icon>
        <FaBars />
      </Icon>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 1.2em;
  border-bottom: 1px solid rgba(160, 160, 160, 0.3);
`;
const NavContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 1.2em;
  padding-left: 0.5em;
  border-left: 1px solid rgba(160, 160, 160, 0.3);
`;
const NavItem = styled(NavLink)`
  padding: 0 1.3em;
  border-right: 1px solid rgba(160, 160, 160, 0.3);
  font-size: 0.7em;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  &:last-child {
    border-right: none;
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 100%;
  border-left: 1px solid rgba(160, 160, 160, 0.3);
  border-right: 1px solid rgba(160, 160, 160, 0.3);
  cursor: pointer;
  transition: 0.4s;
  &:last-child {
    border-left: none;
  }
  svg {
    fill: #aaa;
    &:hover {
      fill: #2ebaae;
    }
  }
`;
export default Header;
