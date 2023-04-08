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
      <IconWrapper theme={theme}>
        <IconItem theme={theme}>
          <Icon icon={<FaSearch />} />
        </IconItem>
        <IconItem
          theme={theme}
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
  border-bottom: ${({ theme }) => theme.common.border};
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
  flex-grow: 1;
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 1.2em;
  padding-left: 0.5em;
  border-left: ${({ theme }) => theme.common.border};
  @media ${({ theme }) => theme.device.tabletPortrait} {
    display: none;
  }
`;
const NavItem = styled(NavLink)`
  padding: 0 1.3em;
  border-right: ${({ theme }) => theme.common.border};
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
  border-left: ${({ theme }) => theme.common.border};
  border-right: ${({ theme }) => theme.common.border};
  cursor: pointer;
  &:last-child {
    border: none;
  }
`;
export default Header;
