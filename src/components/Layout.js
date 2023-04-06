import styled from "styled-components";

import Header from "./Header";
import Menu from "./Menu";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
      <Menu />
    </div>
  );
};
const Main = styled.div`
  padding-top: 55px;
`;
export default Layout;
