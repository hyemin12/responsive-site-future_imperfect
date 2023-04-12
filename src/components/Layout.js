import styled from "styled-components";

import theme from "./styles/theme";

import Header from "./Header";
import Menu from "./Menu";
import SideBar from "./SideBar";

const Layout = ({ children, sidebar }) => {
  if (sidebar)
    return (
      <>
        <Header />
        <Container theme={theme} sidebar={sidebar}>
          <SidebarMain theme={theme}>
            <>{children}</>
          </SidebarMain>
          <SideBar />
          <Menu />
        </Container>
      </>
    );
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Menu />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 3.5em 5em;
  gap: 3.5em;
  @media ${({ theme }) => theme.device.tablet} {
    display: block;
  }
  @media ${({ theme }) => theme.device.tabletPortrait} {
    padding: 3.5em;
  }
  ${({ sidebar }) => sidebar && `padding-top: calc(55px + 3.5em)`}
`;

const SidebarMain = styled.div`
  flex-shrink: 0;
  width: 62vw;
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
`;

const Main = styled.div`
  padding-top: 55px;
`;

export default Layout;
