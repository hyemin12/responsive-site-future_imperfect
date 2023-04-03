import styled from "styled-components";

import { useMenuContext } from "../hooks/menu_context";

import Header from "./Header";
import Menu from "./Menu";

const Layout = ({ children }) => {
  const { isOpenMenu } = useMenuContext();

  return (
    <div>
      <Header />
      <Main>{children}</Main>
      {isOpenMenu && <Menu />}
    </div>
  );
};
const Main = styled.div`
  padding-top: 55px;
`;
export default Layout;
