import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import Logo from "./Elements/Logo";

import { FaSearch, FaBars } from "react-icons/fa";
import Icon from "./Elements/Icon";

const links = ["lorem", "ipsum", "feugiat", "tempus", "adipiscing"];

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <H4>Future imperfect</H4>
      </Link>
      <NavContainer>
        {links.map((link) => (
          <NavItem to="#" onClick={(e) => e.preventDefault} key={link}>
            {link}
          </NavItem>
        ))}
      </NavContainer>

      <IconItem>
        <Icon icon={<FaSearch />} />
      </IconItem>
      <IconItem>
        <Icon icon={<FaBars />} />
      </IconItem>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  background-color: #fff;
  padding-left: 1.2em;
  border-bottom: 1px solid rgba(160, 160, 160, 0.3);
`;
const H4 = styled.h4`
  color: #3c3b3b;
  font-size: 0.7em;
  letter-spacing: 0.3em;
  text-transform: uppercase;
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
const IconItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 100%;
  border-left: 1px solid rgba(160, 160, 160, 0.3);
  border-right: 1px solid rgba(160, 160, 160, 0.3);
  &:last-child {
    border: none;
  }
`;
export default Header;
