import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import { useMenuContext } from "../hooks/menu_context";
import theme from "./styles/theme";

import Icon from "./Elements/Icon";

import { FaSearch, FaBars } from "react-icons/fa";

const links = ["lorem", "ipsum", "feugiat", "tempus", "adipiscing"];

const Header = () => {
  const { setIsOpenMenu } = useMenuContext();

  return (
    <HeaderContainer size={theme.device}>
      <Link to="/">
        <H4>Future imperfect</H4>
      </Link>
      <NavContainer size={theme.device}>
        {links.map((link) => (
          <NavItem to="#" onClick={(e) => e.preventDefault} key={link}>
            {link}
          </NavItem>
        ))}
      </NavContainer>
      <IconWrapper size={theme.device}>
        <IconItem>
          <Icon icon={<FaSearch />} />
        </IconItem>
        <IconItem
          onClick={() => {
            setIsOpenMenu(true);
          }}
        >
          <Icon icon={<FaBars />} />
        </IconItem>
      </IconWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  background-color: #fff;
  padding-left: 1.2em;
  border-bottom: 1px solid rgba(160, 160, 160, 0.3);
  position: fixed;
  z-index: 9;
  @media ${({ size }) => size.tabletPortrait} {
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
  flex-grow: 1;
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 1.2em;
  padding-left: 0.5em;
  border-left: 1px solid rgba(160, 160, 160, 0.3);
  @media ${({ size }) => size.tabletPortrait} {
    display: none;
  }
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
const IconWrapper = styled.ul`
  display: flex;
  height: 100%;
`;
const IconItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 100%;
  border-left: 1px solid rgba(160, 160, 160, 0.3);
  border-right: 1px solid rgba(160, 160, 160, 0.3);
  cursor: pointer;
  &:last-child {
    border: none;
  }
`;
export default Header;
