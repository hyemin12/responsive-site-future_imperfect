import styled from "styled-components";

import Logo from "./Logo";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <NavContainer></NavContainer>
      <Icon></Icon>
      <Icon></Icon>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div``;
const NavContainer = styled.div``;
const Icon = styled.div``;
export default Header;
